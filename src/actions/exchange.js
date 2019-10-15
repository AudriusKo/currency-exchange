export const SWAP_EXCHANGES = 'exchangeCurrencies/SWAP_EXCHANGES'
export const SWAP_CURRENCIES = 'exchangeCurrencies/SWAP_CURRENCIES'
export const SET_CURRENCY = 'exchangeCurrencies/SET_CURRENCY'
export const SET_AMOUNT = 'exchangeCurrencies/SET_AMOUNT'

export const setAmount = (amount, origin) => ({
  type: SET_AMOUNT,
  amount,
  origin,
})

export const setCurrency = (wallet, currency) => ({
  type: SET_CURRENCY,
  wallet,
  currency,
})

export const swapExchanges = () => ({
  type: SWAP_EXCHANGES,
})

export const swapCurrencies = () => ({
  type: SWAP_CURRENCIES,
})
