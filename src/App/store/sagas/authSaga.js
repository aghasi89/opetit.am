import { call, takeLatest } from "@redux-saga/core/effects";
import { loginRequest } from "../../services/routes/login";
import { authTypes } from "../types";


function* login({payload}){
    const{username,password,role_code}=payload
    
    const response=yield call(loginRequest,username,password,role_code)
    
    try {
        
    } catch (error) {
        
    }
}

export default function* watchAuthSaga(){
    
    yield takeLatest(authTypes.LOGIN,login)
}

export{ watchAuthSaga}