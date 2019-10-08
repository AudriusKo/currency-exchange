import React from 'react'
import styled from 'styled-components'

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
const Input = () => (
  <StyledInput placeholder={0} />
)

export default Input