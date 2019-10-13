import React from 'react'
import { shallow } from 'enzyme'
import { Rate } from './Rate'
import Big from 'big.js'
import { WALLET_SOURCE, WALLET_TARGET, WALLETS, WALLETS_SIGN } from '../constants/wallets'

const setup = () => {
  const props = {
    [WALLET_SOURCE]: WALLETS.EUR,
    [WALLET_TARGET]: WALLETS.USD,
    rate: Big(0.5999)
  }

  const wrapper = shallow(<Rate {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Rate />', () => {
  it('should render rates', () => {
    const { wrapper, props } = setup()

    expect(wrapper.text()).toEqual(`${WALLETS_SIGN[WALLETS.EUR]} 1 = ${WALLETS_SIGN[WALLETS.USD]} ${props.rate}`)
  });

  it('should render loading indicator if there are no rates yet', () => {
    const { wrapper } = setup()

    wrapper.setProps({ rate: 0 })

    expect(wrapper.text()).toEqual('Loading...')
  });
})