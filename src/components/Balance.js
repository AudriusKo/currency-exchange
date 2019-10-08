import React from 'react'
import styled from 'styled-components'

const StyledBalance = styled.div`
  font-size: 1rem;
  color: rgb(139, 149, 158);
  width: 100%;
  float: left;
`

const Balance = () => (
  <StyledBalance>Balance: US$ 0</StyledBalance>
)

export default Balance