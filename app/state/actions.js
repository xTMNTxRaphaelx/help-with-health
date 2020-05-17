export const GET_TIMERS = 'GET_TIMERS'
export const ADD_TIMER = 'ADD_TIMER'
export const ADD_TIMER_SUCCESS = 'ADD_TIMER_SUCCESS'

export const getTimers = () => ({
  type: GET_TIMERS,
})

export const addTimer = (payload) => ({
  type: ADD_TIMER,
  payload,
})

export const addTimerSuccess = (payload) => ({
  type: ADD_TIMER_SUCCESS,
  payload,
})