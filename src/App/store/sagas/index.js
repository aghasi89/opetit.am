import { all } from "redux-saga/effects";
import { watchRegisterSaga } from "./RegisterSaga";

function* rootSaga() {
  yield all([watchRegisterSaga(),contactusSaga()]);

}

export default rootSaga;
