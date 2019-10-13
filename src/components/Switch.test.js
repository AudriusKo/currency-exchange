import React from 'react'
import { shallow } from 'enzyme'
import { Switch } from './Switch'

const setup = () => {
  const props = {
    swapExchanges: jest.fn()
  }

  const wrapper = shallow(<Switch {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Switch />', () => {
  it('triggers exchange swap method', () => {
    const { wrapper, props } = setup()

    wrapper.simulate('click')
    expect(props.swapExchanges).toBeCalled()
  });

})