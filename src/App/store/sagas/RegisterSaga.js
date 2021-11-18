import { takeLatest, call, put } from "redux-saga/effects";
import { confirmCodeRequest, registerRequest } from "../../services/routes/register";
import { setConfirmCodeAction } from "../actions";
import { RegisterTypes } from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER
  });
}

function* confirmCode({ payload }) {
  try {
    const data = yield call(confirmCodeRequest, { email: payload.email });
    yield put(setConfirmCodeAction({ confirm_code: data ? data.code : "" }))
  } catch (error) {
    console.log("error confirmCode = ", error[0].message);
    notify(error[0].message)
  }
}

function* register({ payload }) {
  try {
    const codeData = yield call(registerRequest, { ...payload, role_code: "CL" })
    console.log("register in saga", codeData);
  } catch (error) {
    console.log("error massage = ", error.message);
    notify(error.message)
  }
}

function* watchRegisterSaga() {
  yield takeLatest(RegisterTypes.GET_CONFIRM_CODE, confirmCode)
  yield takeLatest(RegisterTypes.REGISTER, register)
}

export { watchRegisterSaga }
