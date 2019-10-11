import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import exchangeSaga from './sagas/exchange'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
)

sagaMiddleware.run(exchangeSaga, store)

export default store;