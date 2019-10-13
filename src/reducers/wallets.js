import { WALLETS } from '../constants/wallets'
import { EXCHANGE } from '../actions/wallets'
import Big from 'big.js'

const initialState = Object.values(WALLETS).reduce((acc, currency) => {
  acc[currency] = {
    currency,
    amount: Big(Math.floor(Math.random() * 1000))
  }
  return acc
}, {})

export default function (state = initialState, action) {
  switch (action.type) {
    case EXCHANGE: {
      const {sourceCurrency, sourceAmount, targetCurrency, targetAmount} = action
      const cloneState = {...state}

      cloneState[sourceCurrency].amount = cloneState[sourceCurrency].amount.minus(parseFloat(sourceAmount))
      cloneState[targetCurrency].amount = cloneState[targetCurrency].amount.plus(parseFloat(targetAmount))

      return {
        ...state,
        ...cloneState
      }
    }
    default:
      return state
  }
}
