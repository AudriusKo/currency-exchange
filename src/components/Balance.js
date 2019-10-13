import React from 'react'
import styled from 'styled-components'
import { WALLETS_SIGN } from '../constants/wallets'

const StyledBalance = styled.div`
  font-size: 1rem;
  color: ${props => props.isOverBalance ? "#EB008D" : "#8B959E"};
  width: 100%;
  float: left;
`

const ErrorMessage = styled.span`
  float: right;
  color: #8B959E
`

const Balance = ({value, currency, isOverBalance}) => (
  <StyledBalance isOverBalance={isOverBalance}>
    Balance: {WALLETS_SIGN[currency]} {value.toString()}
    {isOverBalance &&
      <ErrorMessage>exceeds balance</ErrorMessage>
    }
  </StyledBalance>
)

export default Balance