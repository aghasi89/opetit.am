import { call, takeEvery } from "@redux-saga/core/effects";
import { contactUsRequest } from "../../services/routes/contactUs";
import { contactUsTypes } from "../types";

function* sendMassage({payload}){
  try {
    yield call(contactUsRequest,payload)
  } catch (error) {
      throw error
  }
    

}


export default function* contactUsWatch(){
    yield takeEvery(contactUsTypes.SEND_MASSAGE,sendMassage)

}