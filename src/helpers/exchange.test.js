import { getExchangeAmount } from './exchange'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'
import Big from 'big.js'

describe('getExchangeAmount', () => {
  it('should round down when wallet is source', () => {
    const rate = getExchangeAmount(WALLET_SOURCE, 10, 1.4444)

    expect(rate).toEqual(Big(14.44))
  });

  it('should round up when wallet is destination', () => {
    const rate = getExchangeAmount(WALLET_TARGET, 10, 0.6923)

    expect(rate).toEqual(Big(14.45))
  });

  it('should handle division by zero', () => {
    const rate = getExchangeAmount(WALLET_TARGET, 10, 0)

    expect(rate).toEqual(Big(0))
  });
})