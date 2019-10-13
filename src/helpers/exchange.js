import Big from 'big.js'
import { WALLET_SOURCE } from '../constants/wallets'

export const getExchangeAmount = (origin, amount, exchangeRate) => {
  let exchangeAmount = Big(0)

  if (origin === WALLET_SOURCE) {
    exchangeAmount = Big(amount || 0).times(exchangeRate).round(2, 0) // round down
  } else if (exchangeRate !== 0) {
    exchangeAmount = Big(amount || 0).div(exchangeRate).round(2, 3) // round up
  }

  return exchangeAmount
}