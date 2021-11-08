import { all } from 'redux-saga/effects';
import { watcherLogin, watcherRegisteredUser } from './saga';

export function* rootWatcher() {
    yield all([watcherLogin(), watcherRegisteredUser()]);
}
