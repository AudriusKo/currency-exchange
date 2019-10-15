import React from 'react'
import { shallow } from 'enzyme'
import Balance, { ErrorMessage } from './Balance'

const setup = () => {
  const props = {
    value: 10,
    currency: 'EUR',
    isOverBalance: false,
  }

  const wrapper = shallow(<Balance {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<Balance />', () => {
  it('renders without error', () => {
    const { wrapper } = setup()

    const error = wrapper.find(ErrorMessage)

    expect(error.exists()).toBeFalsy()
  })

  it('renders error when amount is over balance', () => {
    const { wrapper } = setup()
    wrapper.setProps({ isOverBalance: true })

    const error = wrapper.find(ErrorMessage)

    expect(error.exists()).toBeTruthy()
    expect(error.text()).toEqual('exceeds balance')
  })
})
