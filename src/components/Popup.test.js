import React from 'react'
import { shallow } from 'enzyme'
import { Backdrop, CurrencyItem, Popup } from './Popup'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'

const setup = () => {
  const props = {
    wallets: {
      EUR: {
        amount: 10,
        currency: 'EUR',
      },
      USD: {
        amount: 20,
        currency: 'USD',
      },
      GBP: {
        amount: 30,
        currency: 'GBP',
      },
    },
    exchange: {
      [WALLET_SOURCE]: 'EUR',
      [WALLET_TARGET]: 'USD',
    },
    isShowing: true,
    hide: jest.fn(),
    setWallet: jest.fn(),
    setCurrency: jest.fn(),
    swapCurrencies: jest.fn(),
    wallet: WALLET_SOURCE,
  }

  const wrapper = shallow(<Popup {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<Popup />', () => {
  it('should hide when clicked on backdrop', () => {
    const { wrapper, props } = setup()

    wrapper.find(Backdrop).simulate('click')

    expect(props.hide).toBeCalled()
  })

  it('should render all currencies in the wallet', () => {
    const { wrapper, props } = setup()

    expect(wrapper.find(CurrencyItem)).toHaveLength(
      Object.keys(props.wallets).length
    )
  })

  it('should not set currency when selecting already selected currency', () => {
    const { wrapper, props } = setup()

    wrapper
      .find(CurrencyItem)
      .at(0)
      .simulate('click')

    expect(props.hide).toBeCalled()
    expect(props.setCurrency).not.toBeCalled()
    expect(props.swapCurrencies).not.toBeCalled()
  })

  it('should set currency', () => {
    const { wrapper, props } = setup()

    wrapper
      .find(CurrencyItem)
      .at(2)
      .simulate('click')

    expect(props.hide).toBeCalled()
    expect(props.setCurrency).toBeCalledWith(WALLET_SOURCE, 'GBP')
    expect(props.swapCurrencies).not.toBeCalled()
  })

  it('should swap currencies', () => {
    const { wrapper, props } = setup()

    wrapper
      .find(CurrencyItem)
      .at(1)
      .simulate('click')

    expect(props.hide).toBeCalled()
    expect(props.setCurrency).not.toBeCalled()
    expect(props.swapCurrencies).toBeCalled()
  })
})
