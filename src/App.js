import React from 'react';
import Button from './components/Button'
import Rate from './components/Rate'
import Panel from './components/Panel'
import Wallet from './components/Wallet'
import { connect } from 'react-redux'
import { WALLET_FROM, WALLET_TO } from './constants/wallets'

const mapStateToProps = (state) => ({
  exchange: state.exchange,
})

function App({exchange}) {
  return (
    <div className="container">
      <Panel>
        <Wallet id={exchange.from} type={WALLET_FROM} />
      </Panel>

      <Panel muted>
        <Rate />
        <Wallet id={exchange.to} type={WALLET_TO} />
        <Button
          source={exchange.from}
          target={exchange.to}
          sourceAmount={exchange.amount}
          targetAmount={exchange.targetAmount}
        />
      </Panel>
    </div>
  );
}

export default connect(mapStateToProps)(App);
