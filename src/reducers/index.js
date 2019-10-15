import { combineReducers } from 'redux'
import wallets from './wallets'
import exchange from './exchange'
import rates from './rates'

export default combineReducers({ wallets, exchange, rates })
