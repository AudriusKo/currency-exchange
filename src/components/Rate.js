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

const mapStateToProps = (state, props) => ({
  rate: getRate(state, props.source, props.target),
})

export const Rate = ({ rate, source, target }) => (
  <Container>
    <Switch />
    <StyledRate>
      {rate
        ? `${WALLETS_SIGN[source]} 1 = ${WALLETS_SIGN[target]} ${rate
            .round(4, 0)
            .toFixed(4)}`
        : 'Loading...'}
    </StyledRate>
  </Container>
)

export default connect(mapStateToProps)(Rate)
