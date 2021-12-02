import { all } from "redux-saga/effects";
import { watchRegisterSaga } from "./RegisterSaga";
import { watchAuthSaga } from "./authSaga";
import contactusSaga from "./contactUsSaga"
function* rootSaga() {
  yield all([
    watchRegisterSaga(),
    contactusSaga(),
    watchAuthSaga()
  ]);
}
export default rootSaga;
