import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setExchange } from '../actions/exchange'

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledPopup = styled.div`
  background: #ffffff;
  padding: 20px 0;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 1rem;
`

const StyledTitle = styled.div`
  color: #8d949e;
  padding: 0 20px;
  font-size: 0.8rem;
`

const StyledUl = styled.ul`
  padding: 0;
  border-bottom: 1px solid #e2e2e2;
`

const StyledLi = styled.li`
  list-style-type: none;
  border-top: 1px solid #e2e2e2;
  padding: 10px 20px;
  color: #3173e3;
  cursor: pointer;
`

const mapStateToProps = (state) => ({
  wallets: state.wallets,
})

const mapDispatchToProps = {setExchange}

const Popup = ({ wallets, isShowing, hide, setWallet, setExchange, type }) => {
  if (!isShowing) {
    return null
  }

  const onClickHandler = (currency) => {
    setExchange(type, currency)
    hide()
  }

  return ReactDOM.createPortal(
    <Background onClick={hide}>
      <StyledPopup onClick={e => e.stopPropagation()}>
        <StyledTitle>Choose currency:</StyledTitle>
        <StyledUl>
          {Object.values(wallets).map((value, index) => {
            return <StyledLi key={index} onClick={() => onClickHandler(value.currency)}>{value.currency} · {value.amount}</StyledLi>
          })}
        </StyledUl>
      </StyledPopup>
    </Background>, document.body
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);