import { call, takeEvery } from "@redux-saga/core/effects";
import { contactUsRequest } from "../../services/api/routes/contactUs";
import { contactUsTypes } from "../types";
import { toast } from 'react-toastify';
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
    console.log(payload);
    yield call(contactUsRequest, payload)
    toastSuccess('success')
  } catch (error) {
    toastError("message not send")
    
  }


}


export default function* contactUsWatch() {
  yield takeEvery(contactUsTypes.SEND_MASSAGE, sendMassage)

}