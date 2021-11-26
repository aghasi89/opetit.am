import { takeLatest, call, put } from "redux-saga/effects";
import { confirmCodeRequest, registerRequest } from "../../services/routes/register";
import { setConfirmCodeAction } from "../actions";
import { RegisterTypes } from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  
  });
}
function preventBack() {window.history.forward();}        

function* confirmCode({ payload }) {
  const { setLoad, setOpen, ...setData } = payload
  try {
    console.log("confirm code in saga----------")
    const data = yield call(confirmCodeRequest, { email: setData.email });
    // yield put(setConfirmCodeAction({ confirm_code: data ? data.code : "" }))
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
    console.log("register in saga", codeData);
    setLoad()
    if (codeData.access) {
      console.log(codeData.access);
      localStorage.setItem("access", codeData.access);
      window.location = "/panel"
      setTimeout(preventBack(), 0);
      //preventBack()
      
      window.onload = null
    }
  } catch (error) {
    setLoad();
    console.log("error massage = ", error.message);
    notify(error.message)
  }
}



function* watchRegisterSaga() {
  yield takeLatest(RegisterTypes.GET_CONFIRM_CODE, confirmCode)
  yield takeLatest(RegisterTypes.REGISTER, register)
}

export { watchRegisterSaga }