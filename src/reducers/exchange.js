import { WALLET_SOURCE, WALLET_TARGET, WALLETS } from '../constants/wallets'
import { SET_AMOUNT, SET_CURRENCY, SWAP_CURRENCIES, SWAP_EXCHANGES } from '../actions/exchange'

const initialState = {
  [WALLET_SOURCE]: WALLETS.EUR,
  [WALLET_TARGET]: WALLETS.USD,
  amount: '',
  origin: WALLET_SOURCE
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SWAP_EXCHANGES: {
      return {
        ...state,
        [WALLET_SOURCE]: state.target,
        [WALLET_TARGET]: state.source,
        origin: state.origin === WALLET_SOURCE ? WALLET_TARGET : WALLET_SOURCE,
      }
    }
    case SWAP_CURRENCIES: {
      return {
        ...state,
        [WALLET_SOURCE]: state[WALLET_TARGET],
        [WALLET_TARGET]: state[WALLET_SOURCE],
      }
    }
    case SET_CURRENCY: {
      return {
        ...state,
        [action.wallet]: action.currency
      }
    }
    case SET_AMOUNT: {
      const {amount, origin} = action
      return { ...state, amount, origin }
    }
    default:
      return state
  }
}