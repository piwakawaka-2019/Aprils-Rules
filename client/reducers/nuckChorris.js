import {RECEIVE_NUCKCHORRIS} from '../actions'

function nuck (state = [], action) {
  console.log(action.nuckChorris)
  switch (action.type) {
    case RECEIVE_NUCKCHORRIS:
      return action.nuckChorris

    default:
      return state
  }
}

export default nuck
