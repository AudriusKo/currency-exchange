import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setAmount } from '../actions/exchange'
import { WALLET_SOURCE } from '../constants/wallets'

const StyledInput = styled.input`
  width: 50%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 2rem;
  text-align: right;
  ::placeholder {
    color: rgb(139, 149, 158);
  }
`

const mapDispatchToProps = {setAmount}

const mapStateToProps = (state) => ({
  exchange: state.exchange
})

const isValidInput = (value) => {
  if (value.length > 10) {
    return false;
  }
  if (value === '') {
    return true;
  }
  if (/^0(\.[0-9]{0,2})?$/g.test(value)) {
    return true;
  }
  return /^[1-9][0-9]*(\.[0-9]{0,2})?$/g.test(value)
}

const sanitizeInput = (input) => {
  //treat comma as dot
  let value = input.replace(',', '.')
  value = value.replace('- ', '')

  //trim leading zeros
  if (value.length) {
    value = value.replace(/^(?!0\.)0+/, "")
    if (value === '') {
      value = '0'
    }
  }

  //start with 0 if dot/comma was entered first
  if (value === '.') {
    value = '0.'
  }

  return value
}

export const Input = ({setAmount, wallet, exchange, exchangeAmount}) => {
  const handleInputChange = event => {
    const value = sanitizeInput(event.target.value)

    if (isValidInput(value)) {
      setAmount(value, wallet)
    }
  }

  let amount = exchange.amount

  if (exchange.origin !== wallet) {
    amount = exchangeAmount.eq(0) ? '' : exchangeAmount.toFixed(2)
  }

  if (amount.length) {
    amount = wallet === WALLET_SOURCE ? '- ' + amount : '+ ' + amount
  }

  return (
    <StyledInput
      placeholder={0}
      value={amount}
      onChange={handleInputChange}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (Input)