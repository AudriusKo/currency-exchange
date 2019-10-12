import { SET_EXCHANGE, SET_WALLET, SWITCH_WALLETS } from '../actions/exchange'
import { select, put, takeLatest } from 'redux-saga/effects'

const getExchange = state => state.exchange

function* setActiveWallets(action) {
  const exchange = yield select(getExchange)
  //already selected - do nothing
  if (exchange[action.direction] === action.currency) {
    return
  }

  //if currency is in from/to that means we need to swap
  if ([exchange.from, exchange.to].includes(action.currency)) {
    yield put({type: SWITCH_WALLETS});
  } else {
    yield put({type: SET_WALLET, direction: action.direction, currency: action.currency});
  }
}

function* exchangeSaga() {
  yield takeLatest(SET_EXCHANGE, setActiveWallets);
}

export default exchangeSaga