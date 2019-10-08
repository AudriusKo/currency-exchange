import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/arrow.svg';

const StyledWallet = styled.div`
  width: 50%;
  font-size: 2rem;
  svg {
    display: inline-block;
    vertical-align: middle;
    width: 1.2rem;
    height: 1.2rem;
    padding-left: 0.5rem;
  }
`

const Wallet = () => (
  <StyledWallet>
    USD
    <Arrow />
  </StyledWallet>
)

export default Wallet