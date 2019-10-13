import React from 'react'
import { shallow } from 'enzyme'
import Big from 'big.js'
import { Input } from './Input'
import { WALLET_SOURCE, WALLET_TARGET } from '../constants/wallets'

const setup = () => {
  const props = {
    setAmount: jest.fn(),
    wallet: WALLET_SOURCE,
    exchange: {
      origin: WALLET_SOURCE,
      amount: ''
    },
    exchangeAmount: Big(9.5)
  }

  const wrapper = shallow(<Input {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Input />', () => {
  it('initial value should be empty', () => {
    const { wrapper } = setup()

    expect(wrapper.props().value).toEqual('');
  });

  it('should set conversion amount if input is not the original input', () => {
    const { wrapper } = setup()

    wrapper.setProps({ wallet: WALLET_TARGET })

    expect(wrapper.props().value).toEqual('+ 9.50');
  });

  it('should use amount if input source', () => {
    const { wrapper } = setup()

    wrapper.setProps({
      exchange: {
        amount: '4.54',
        origin: WALLET_SOURCE
      }
    })

    expect(wrapper.props().value).toEqual('- 4.54');
  });


  it('should on comma input convert it to 0.', () => {
    const { wrapper, props } = setup()

    wrapper.simulate('change', {target: {value: ','}});

    expect(props.setAmount).toBeCalledWith('0.', WALLET_SOURCE)
  });

  it('should not accept more than 2 numbers after dot', () => {
    const { wrapper, props } = setup()

    wrapper.simulate('change', {target: {value: '1.123'}});

    expect(props.setAmount).not.toHaveBeenCalled()
  });
})