import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import LoginReducer from './Reducers/LoginReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './Saga/rootWatcher';
import { logger } from 'redux-logger';
import RegistrationReduser from './Reducers/RegistrationReducer';
import GlobalReducer from './Reducers/GlobalReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    loginState: LoginReducer,
    registrationState: RegistrationReduser,
    globalState: GlobalReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

window.store = store;

export default store;
