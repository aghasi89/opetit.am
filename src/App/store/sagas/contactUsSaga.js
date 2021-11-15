import { call, takeEvery } from "@redux-saga/core/effects";
import { contactUsRequest } from "../../services/routes/contactUs";
import { contactUsTypes } from "../types";

function* sendMassage({payload}){
  try {
      console.log(payload);
    const data =yield call(contactUsRequest,payload)
    console.log(data);
  } catch (error) {
      console.log(error);
  }
    

}


export default function* contactUsWatch(){
    console.log("start contact us saga!");
    yield takeEvery(contactUsTypes.SEND_MASSAGE,sendMassage)

}