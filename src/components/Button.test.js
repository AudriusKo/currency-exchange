import React from 'react'
import { Button } from './Button'
import { shallow } from 'enzyme'
import Big from 'big.js'

const setup = () => {
  const props = {
    exchange: {
      amount: Big(10),
    },
    exchangeAmount: Big(5),
    exchangeCurrencies: jest.fn(),
    setAmount: jest.fn(),
    isOverBalance: false,
  }

  const wrapper = shallow(<Button {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<Button />', () => {
  it('renders enabled button', () => {
    const { wrapper } = setup()

    expect(wrapper.prop('disabled')).toBeFalsy()
  })

  it('renders disabled button when over balance', () => {
    const { wrapper } = setup()
    wrapper.setProps({ isOverBalance: true })
    expect(wrapper.prop('disabled')).toBeTruthy()
  })

  it('renders disabled button exchange amount is zero', () => {
    const { wrapper } = setup()
    wrapper.setProps({ exchangeAmount: Big(0) })
    expect(wrapper.prop('disabled')).toBeTruthy()
  })

  it('renders disabled button source amount is zero', () => {
    const { wrapper } = setup()
    wrapper.setProps({ exchange: { amount: Big(0) } })
    expect(wrapper.prop('disabled')).toBeTruthy()
  })

  it('triggers exchange function on click', () => {
    const { wrapper, props } = setup()

    wrapper.simulate('click')
    expect(props.exchangeCurrencies).toBeCalled()
  })
})
