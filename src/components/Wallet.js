import React from 'react'
import Currency from './Currency'
import Input from './Input'
import Balance from './Balance'
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  wallets: state.wallets,
})

const Wallet = ({wallets, id, type}) => (
  <React.Fragment>
    <Currency value={wallets[id].currency} type={type} />
    <Input source={type} />
    <Balance value={wallets[id].amount} currency={wallets[id].currency} />
  </React.Fragment>
)

export default connect(mapStateToProps)(Wallet);