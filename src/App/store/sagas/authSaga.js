import { call, takeLatest,put } from "@redux-saga/core/effects";
import api from "../../services";
import { loginRequest } from "../../services/routes/login";
import { authActions } from "../actions";
import { authTypes } from "../types";


function* login({payload}){
    const{username,password,role_code}=payload
    
    
    
    try {
        const response=yield call(loginRequest,username,password,role_code)
        if(response.access){
            localStorage.setItem("access",response.access)
            api.defaults.headers.common["Authorization"]="Bearer"+response.access
            yield put(authActions.loginSuccessAction())
        }
    } catch (error) {
        yield put (authActions.setErrorMassageAction(error.message))
    }
}

export default function* watchAuthSaga(){
    
    yield takeLatest(authTypes.LOGIN,login)
}

export{ watchAuthSaga}