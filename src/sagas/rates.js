import { SET_RATES } from '../actions/exchange'
import { fork, put, delay } from 'redux-saga/effects'
import axios from 'axios/index'

function* fetchRates() {
  while (true) {
    try {
      const response = yield axios.get(`https://api.exchangeratesapi.io/latest?base=EUR`)
      const rates = response.data.rates
      rates.EUR = 1
      yield put({type: SET_RATES, rates});
    } catch (e) {
      //TODO: handle this
    }

    yield delay(10 * 1000);
  }
}

function* ratesSaga() {
  yield fork(fetchRates);
}

export default ratesSaga