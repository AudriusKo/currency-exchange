import { all, fork } from 'redux-saga/effects'
import exchangeSaga from './exchange'
import ratesSaga from './rates'

export default function * rootSaga () {
  yield all([
    fork(ratesSaga),
    fork(exchangeSaga),
  ])
}