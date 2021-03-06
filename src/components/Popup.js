import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setCurrency, swapCurrencies } from '../actions/exchange'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'

export const Backdrop = styled.div`
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
  max-width: 500px;
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

const Currencies = styled.ul`
  padding: 0;
  border-bottom: 1px solid #e2e2e2;
`

export const CurrencyItem = styled.li`
  list-style-type: none;
  border-top: 1px solid #e2e2e2;
  padding: 10px 20px;
  color: #3173e3;
  cursor: pointer;
`

const mapStateToProps = state => ({
  wallets: state.wallets,
  exchange: state.exchange,
})

const mapDispatchToProps = { setCurrency, swapCurrencies }

export const Popup = ({
  wallets,
  exchange,
  isShowing,
  hide,
  setWallet,
  setCurrency,
  swapCurrencies,
  wallet,
}) => {
  if (!isShowing) {
    return null
  }

  const onClickHandler = currency => {
    if (exchange[wallet] === currency) {
      hide()
      return
    }

    //if currency is in from/to that means we need to swap
    if ([exchange[WALLET_SOURCE], exchange[WALLET_TARGET]].includes(currency)) {
      swapCurrencies()
    } else {
      setCurrency(wallet, currency)
    }

    hide()
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={hide}>
      <StyledPopup onClick={e => e.stopPropagation()}>
        <StyledTitle>Choose currency:</StyledTitle>
        <Currencies>
          {Object.values(wallets).map((value, index) => {
            return (
              <CurrencyItem
                key={index}
                onClick={() => onClickHandler(value.currency)}
              >
                {value.currency} · {value.amount.toString()}
              </CurrencyItem>
            )
          })}
        </Currencies>
      </StyledPopup>
    </Backdrop>,
    document.body
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)
