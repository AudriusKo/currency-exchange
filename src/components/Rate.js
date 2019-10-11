import React from 'react'
import styled from 'styled-components'
import Switch from './Switch'
import { connect } from 'react-redux'
import { WALLETS_SIGN } from '../constants/wallets'
import { getRate } from '../reducers/rates'

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
  rate: getRate(state, state.exchange.from, state.exchange.to)
})

const Rate = ({exchange, rate}) => (
  <Container>
    <Switch from={exchange.from} />
    <StyledRate>
      {WALLETS_SIGN[exchange.from]} 1 = {WALLETS_SIGN[exchange.to]}
      {rate ? rate.round(4, 0).toFixed(4) : ' loading...'}
    </StyledRate>
  </Container>
)

export default connect(mapStateToProps)(Rate);