import { takeLatest, call, put } from "redux-saga/effects";
import { confirmCodeRequest, registerRequest } from "../../services/routes/register";
import { setUserDataAction } from "../actions";
import { RegisterTypes } from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authSuccessAction } from "../actions/RegisterActions";

const notify = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  
  });
}

function* confirmCode({ payload }) {
  const { setLoad, setOpen, ...setData } = payload
  try {
    console.log("confirm code in saga----------")
    const data = yield call(confirmCodeRequest, { email: setData.email });
    setLoad()
    setOpen()
  } catch (error) {
    setLoad();
    console.log("error confirmCode = ", error[0].message);
    notify(error[0].message)
  }
}

function* register({ payload }) {
  const { setLoad, ...setData } = payload
  try {
    const codeData = yield call(registerRequest, { ...setData, role_code: "CL" })
    yield put(setUserDataAction({ user: codeData.user.user ? codeData.user.user : "" }))
    // console.log("codeData.......", codeData);
    // console.log("register in saga", codeData.user);
    setLoad() 
    if (codeData.access) {
      console.log(codeData.access);
      localStorage.setItem("access", codeData.access);
      yield put(authSuccessAction());
      //window.location = "/panel"
    }
  } catch (error) {
    setLoad();
    notify(error.message)
  }
}

function* watchRegisterSaga() {
  yield takeLatest(RegisterTypes.GET_CONFIRM_CODE, confirmCode)
  yield takeLatest(RegisterTypes.REGISTER, register)
}

export { watchRegisterSaga }
