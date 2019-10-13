import React from 'react'
import { ReactComponent as SwitchIcon } from '../assets/switch.svg';
import styled from 'styled-components'
import { swapExchanges } from '../actions/exchange'
import { connect } from 'react-redux'

const StyledSwitch = styled.div`
  display: inline-block;
  color: #3173e3;
  border: 2px solid #f3f3f5;
  border-radius: 2rem;
  background: #ffffff;
  position: absolute;
  left: 20px;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  svg {
    margin-top: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
    fill: #3173e3;
  }
`

const mapDispatchToProps = {swapExchanges}

const Switch = ({swapExchanges}) => (
  <StyledSwitch onClick={() => swapExchanges()}><SwitchIcon /></StyledSwitch>
)

export default connect(null, mapDispatchToProps) (Switch)
