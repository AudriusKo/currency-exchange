import React from 'react'
import styled from 'styled-components'
import Switch from './Switch'
import { connect } from 'react-redux'
import { WALLETS_SIGN } from '../constants/wallets'

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

const mapStateToProps = (state) => ({
  exchange: state.exchange,
})

const Rate = ({exchange}) => (
  <Container>
    <Switch from={exchange.from} />
    <StyledRate>
      {WALLETS_SIGN[exchange.from]} 1 = {WALLETS_SIGN[exchange.to]}
      {Math.floor(exchange.rate * 10000) / 10000}
    </StyledRate>
  </Container>
)

export default connect(mapStateToProps)(Rate);