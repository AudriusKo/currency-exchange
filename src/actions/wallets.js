export const EXCHANGE = 'exchange/EXCHANGE'

export const exchange = (sourceCurrency, sourceAmount, targetCurrency, targetAmount) => ({
  type: EXCHANGE,
  sourceCurrency,
  sourceAmount,
  targetCurrency,
  targetAmount
})