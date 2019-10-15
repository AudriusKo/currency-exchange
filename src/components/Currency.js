import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import useModal from '../hooks/useModal'
import Popup from './Popup'

const StyledCurrency = styled.div`
  width: 50%;
  font-size: 2rem;
  cursor: pointer;
  svg {
    display: inline-block;
    vertical-align: middle;
    width: 1.2rem;
    height: 1.2rem;
    padding-left: 0.5rem;
  }
`

const Currency = ({ value, wallet }) => {
  const { isShowing, toggle } = useModal()

  return (
    <React.Fragment>
      <StyledCurrency onClick={toggle}>
        {value}
        <Arrow />
      </StyledCurrency>
      <Popup isShowing={isShowing} hide={toggle} wallet={wallet} />
    </React.Fragment>
  )
}

export default Currency
