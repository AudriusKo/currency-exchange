import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { exchangeCurrencies } from '../actions/wallets'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'
import Big from 'big.js'
import { setAmount } from '../actions/exchange'

const StyledButton = styled.button`
  display: block;
  margin: 2rem auto;
  line-height: 1.5em;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  background-color: rgb(235, 0, 141);
  border-style: none;
  border-image: initial;
  border-radius: 2em;
  transition: all 0.2s ease 0s;
  padding: 0.625em 5em;
  outline: none;
  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`
const mapStateToProps = (state) => ({
  exchange: state.exchange,
})

const mapDispatchToProps = {exchangeCurrencies, setAmount}

export const Button = ({exchange, exchangeAmount, exchangeCurrencies, setAmount, isOverBalance}) => {
  const isDisabled = () => {
    return (
      isOverBalance ||
      exchange.amount === '' ||
      Big(exchange.amount).eq(0) ||
      exchangeAmount.eq(0)
    )
  }

  const handleButtonClick = () => {
    const sourceAmount = exchange.origin === WALLET_SOURCE ? exchange.amount : exchangeAmount
    const targetAmount = exchange.origin === WALLET_TARGET ? exchange.amount : exchangeAmount
    exchangeCurrencies(exchange[WALLET_SOURCE], sourceAmount, exchange[WALLET_TARGET], targetAmount)
    setAmount('', WALLET_SOURCE)
  }

  return (
    <StyledButton onClick={handleButtonClick} disabled={isDisabled()}>Exchange</StyledButton>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (Button)