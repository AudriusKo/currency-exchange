import { WALLETS } from '../constants/wallets'
import { SET_AMOUNT, SET_WALLET, SWITCH_WALLETS } from '../actions/exchange'
import Big from 'big.js';

const initialState = {
  from: WALLETS.EUR,
  to: WALLETS.USD,
  amount: Big(0),
  source: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_WALLETS: {
      return {
        ...state,
        from: state.to,
        to: state.from
      }
    }
    case SET_WALLET: {
      return {
        ...state,
        [action.direction]: action.currency
      }
    }
    case SET_AMOUNT: {
      return {
        ...state,
        amount: action.amount,
        targetAmount: action.targetAmount,
        source: action.source
      }
    }
    default:
      return state
  }
}