import { call, takeEvery} from "@redux-saga/core/effects";
import { contactUsRequest } from "../../services/routes/contactUs";
import { contactUsTypes } from "../types";
import { toast } from 'react-toastify';
const toastSuccess=(text)=>{toast.success(text, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  })}
  
const toastError=(text)=>{toast.error( text, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });}

function* sendMassage({payload}){
  try {
     yield call(contactUsRequest,payload)
    toastSuccess('success')
  } catch (error) {
    toastError("message not send")
      throw error
  }
    

}


export default function* contactUsWatch(){
  console.log("4564886464156");
    yield takeEvery(contactUsTypes.SEND_MASSAGE,sendMassage)

}