import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setAmount } from '../actions/exchange'
import { getRate } from '../reducers/rates'

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
  exchange: state.exchange,
  exchangeRate: getRate(state, state.exchange.from, state.exchange.to)
})

const isValidNumber = (value) => {
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

const sanitizeNumber = (input) => {
  //treat , as .
  let value = input.replace(',', '.')

  //trim leading zeros
  if (value.length) {
    value = value.replace(/^(?!0\.)0+/, "")
    if (value === '') {
      value = '0'
    }
  }

  //start with 0 if comma was entered first
  if (value === '.') {
    value = '0.'
  }

  return value
}

const Input = ({setAmount, source, exchange, exchangeRate}) => {
  const [value, setValue] = useState(0);

  const handleInputChange = event => {
    const value = sanitizeNumber(event.target.value)

    if (isValidNumber(value)) {
      setValue(value)
      setAmount(value || 0, source)
    }
  }

  let amount = value

  if (!exchange.amount.eq(0) && exchange.source !== null && exchange.source !== source) {
    amount = exchange.amount.times(exchangeRate).round(2, 0).toFixed(2)
  }

  return (
    <StyledInput
      placeholder={0}
      value={amount || ''}
      onChange={handleInputChange}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (Input)