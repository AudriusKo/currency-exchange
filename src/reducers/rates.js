import { SET_RATES } from '../actions/rates'
import Big from 'big.js'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RATES: {
      return action.rates
    }
    default:
      return state
  }
}

export const getRate = (state, from, to) => {
  if (state.rates[from] === undefined || state.rates[to] === undefined) {
    return 0
  }
  const rateFrom = new Big(state.rates[from])
  const rateTo = new Big(state.rates[to])

  return rateTo.div(rateFrom)
}