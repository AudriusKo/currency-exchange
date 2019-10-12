import Big from 'big.js';

export const SWITCH_WALLETS = 'exchange/SWITCH_WALLETS'
export const SET_WALLET = 'exchange/SET_WALLET'
export const SET_EXCHANGE = 'exchange/SET_EXCHANGE'
export const SET_RATES = 'exchange/SET_RATES'
export const SET_AMOUNT = 'exchange/SET_AMOUNT'

export const setAmount = (amount, source, targetAmount) => ({
  type: SET_AMOUNT,
  amount: new Big(amount),
  source,
  targetAmount
})

export const setExchange = (direction, currency) => ({
  type: SET_EXCHANGE,
  direction,
  currency
})