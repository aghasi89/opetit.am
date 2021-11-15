import { all } from "redux-saga/effects";
import contactusSaga from "./contactUsSaga"
function* rootSaga() {
  yield all([contactusSaga()]);
}

export default rootSaga;
