import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { exchange } from '../actions/wallets'

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
`

const mapDispatchToProps = {exchange}

const Button = ({exchange, source, sourceAmount, target, targetAmount}) => (
  <StyledButton onClick={() => exchange(source, sourceAmount, target, targetAmount)}>Exchange</StyledButton>
)

export default connect(null, mapDispatchToProps) (Button)