export const EXCHANGE = 'exchangeCurrencies/EXCHANGE'

export const exchangeCurrencies = (
  sourceCurrency,
  sourceAmount,
  targetCurrency,
  targetAmount
) => ({
  type: EXCHANGE,
  sourceCurrency,
  sourceAmount,
  targetCurrency,
  targetAmount,
})
