import React from 'react'
import styled from 'styled-components'
import Switch from './Switch'

const StyledRate = styled.div`
  display: inline-block;
  color: #3173e3;
  border: 2px solid #f3f3f5;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  background: #ffffff;
`

const Container = styled.div`
  text-align: center;
  margin-top: -3.8rem;
  width: 100%;
`

const Rate = () => (
  <Container>
    <Switch />
    <StyledRate>US$ 1 = £ 0,8173</StyledRate>
  </Container>
)

export default Rate