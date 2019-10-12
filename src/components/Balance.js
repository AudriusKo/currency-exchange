import React from 'react'
import styled from 'styled-components'
import { WALLETS_SIGN } from '../constants/wallets'

const StyledBalance = styled.div`
  font-size: 1rem;
  color: #8B959E;
  width: 100%;
  float: left;
`

const Balance = ({value, currency}) => (
  <StyledBalance>Balance: {WALLETS_SIGN[currency]} {value.toString()}</StyledBalance>
)

export default Balance