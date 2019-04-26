import {RECEIVE_NUCKCHORRIS} from '../actions'

function nuck (state = [], action) {
  console.log(action.nuckchorris)
  switch (action.type) {
    case RECEIVE_NUCKCHORRIS:
      return action.nuckchorris

    default:
      return state
  }
}

export default nuck
