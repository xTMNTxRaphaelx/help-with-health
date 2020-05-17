import { ADD_TIMER_SUCCESS } from './actions'

const INITIAL_STATE = []

function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_TIMER_SUCCESS:
      return [...payload]
    default:
      return state
  }
}

export default rootReducer
