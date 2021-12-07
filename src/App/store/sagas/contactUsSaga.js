import { call, takeEvery,put } from "@redux-saga/core/effects";
import { contactUsRequest } from "../../services/api/routes/contactUs";
import { contactUsTypes } from "../types";
import { toast } from 'react-toastify';
import { contactUsActions } from "../actions";
const toastSuccess = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

const toastError = (text) => {
  toast.error(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

function* sendMassage({ payload }) {
  try {
    yield put(contactUsActions.sendMassageLoaderAction()) 
    yield call(contactUsRequest, payload)
    yield put(contactUsActions.sendMassageLoaderAction()) 
    toastSuccess('success')
  } catch (error) {
    yield put(contactUsActions.sendMassageLoaderAction()) 
    toastError("message not send")
    throw error
  }


}


export default function* contactUsWatch() {
  yield takeEvery(contactUsTypes.SEND_MASSAGE, sendMassage)

}