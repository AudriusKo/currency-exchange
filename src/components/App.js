import React from 'react'
import Button from './Button'
import Rate from './Rate'
import Panel from './Panel'
import { connect } from 'react-redux'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'
import Currency from './Currency'
import Input from './Input'
import Balance from './Balance'
import { getRate } from '../reducers/rates'
import { getExchangeAmount } from '../helpers/exchange'
import Big from 'big.js'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 600px;
  height: 100%;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.2);
`

const mapStateToProps = state => ({
  wallets: state.wallets,
  exchange: state.exchange,
  exchangeRate: getRate(
    state,
    state.exchange[WALLET_SOURCE],
    state.exchange[WALLET_TARGET]
  ),
})

function App({ exchange, wallets, exchangeRate }) {
  const source = exchange[WALLET_SOURCE]
  const target = exchange[WALLET_TARGET]
  const originAmount = Big(exchange.amount || 0)
  const exchangeAmount = getExchangeAmount(
    exchange.origin,
    exchange.amount,
    exchangeRate
  )

  const isOverBalance = () => {
    const requestedAmount =
      exchange.origin === WALLET_SOURCE ? originAmount : exchangeAmount
    return wallets[source].amount.lt(requestedAmount)
  }

  return (
    <StyledApp>
      <Panel>
        <Currency value={source} wallet={WALLET_SOURCE} />
        <Input wallet={WALLET_SOURCE} exchangeAmount={exchangeAmount} />
        <Balance
          value={wallets[source].amount}
          currency={source}
          isOverBalance={isOverBalance()}
        />
      </Panel>

      <Panel muted>
        <Rate source={source} target={target} />
        <Currency value={target} wallet={WALLET_TARGET} />
        <Input wallet={WALLET_TARGET} exchangeAmount={exchangeAmount} />
        <Balance
          value={wallets[target].amount}
          currency={target}
          isOverBalance={false}
        />
        <Button
          exchangeAmount={exchangeAmount}
          isOverBalance={isOverBalance()}
        />
      </Panel>
    </StyledApp>
  )
}

export default connect(mapStateToProps)(App)
