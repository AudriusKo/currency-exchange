import { WALLETS } from '../constants/wallets'

const initialState = Object.values(WALLETS).reduce((acc, cur) => {
  acc[cur] = {
    currency: cur,
    amount: Math.floor(Math.random() * 1000)
  }
  return acc
}, {})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'test': {
      const {id, content} = action.payload
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      }
    }
    default:
      return state
  }
}
