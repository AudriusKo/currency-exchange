import { SET_EXCHANGE, SET_RATE, SET_WALLET, SWITCH_WALLETS } from '../actions/exchange'
import { delay, select, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios/index'
import { WALLET_FROM, WALLET_TO } from '../constants/wallets'

const getExchange = state => state.exchange

function* fetchRates(action) {
  const exchange = yield select(getExchange)
  //already selected - do nothing
  if (exchange[action.direction] === action.currency) {
    return
  }

  let from, to

  //if currency is in from/to that means we need to swap
  if ([exchange.from, exchange.to].includes(action.currency)) {
    yield put({type: SWITCH_WALLETS});
    from = exchange.to
    to = exchange.from
  } else {
    yield put({type: SET_WALLET, direction: action.direction, currency: action.currency});
    from = action.direction === WALLET_FROM ? action.currency : exchange.from
    to = action.direction === WALLET_TO ? action.currency : exchange.from
  }

  while (true) {
    try {
      const response = yield axios.get(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`)
      const rate = response.data.rates[to]
      yield put({type: SET_RATE, rate});
    } catch (e) {
      //TODO: handle this
    }

    yield delay(10 * 1000);
  }
}

function* exchangeSaga() {
  yield takeLatest(SET_EXCHANGE, fetchRates);
}

export default exchangeSaga