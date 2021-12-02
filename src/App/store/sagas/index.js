import { all } from "redux-saga/effects";
import { watchRegisterSaga } from "./RegisterSaga";
import contactusSaga from "./contactUsSaga"
function* rootSaga() {
  yield all([
    watchRegisterSaga(),
    contactusSaga()

  ]);
}
export default rootSaga;
