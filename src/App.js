import React from 'react'
import Button from './components/Button'
import Rate from './components/Rate'
import Panel from './components/Panel'
import { connect } from 'react-redux'
import { WALLET_SOURCE, WALLET_TARGET } from './constants/wallets'
import Currency from './components/Currency'
import Input from './components/Input'
import Balance from './components/Balance'
import { getRate } from './reducers/rates'
import { getExchangeAmount } from './helpers/exchange'
import Big from 'big.js'

const mapStateToProps = (state) => ({
  wallets: state.wallets,
  exchange: state.exchange,
  exchangeRate: getRate(state, state.exchange[WALLET_SOURCE], state.exchange[WALLET_TARGET]),
})

function App({exchange, wallets, exchangeRate}) {
  const source = exchange[WALLET_SOURCE]
  const target = exchange[WALLET_TARGET]
  const originAmount = Big(exchange.amount || 0)
  const exchangeAmount = getExchangeAmount(exchange.origin, exchange.amount, exchangeRate)

  const isOverBalance = () => {
    const requestedAmount = exchange.origin === WALLET_SOURCE ? originAmount : exchangeAmount
    return wallets[source].amount.lt(requestedAmount)
  }

  return (
    <div className="container">
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
        <Button exchangeAmount={exchangeAmount} isOverBalance={isOverBalance()} />
      </Panel>
    </div>
  );
}

export default connect(mapStateToProps)(App);
