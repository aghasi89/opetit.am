import { all } from "redux-saga/effects";
import { watchRegisterSaga } from "./RegisterSaga";
import {watchAuthSaga} from "./authSaga"
function* rootSaga() {
  yield all([watchRegisterSaga(),watchAuthSaga()]);
}

export default rootSaga;
