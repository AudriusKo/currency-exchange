import { combineReducers } from "redux";
import wallets from "./wallets";
import exchange from './exchange'

export default combineReducers({ wallets, exchange });