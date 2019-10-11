import React from 'react'
import styled from 'styled-components'

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

const Button = () => (
  <StyledButton>Exchange</StyledButton>
)

export default Button