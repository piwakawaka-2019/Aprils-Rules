import {RECEIVE_TRONALDDUMP} from '../actions'


function tronald (state = [], action) {
  console.log(action.tronaldDump)
  switch (action.type) {
    case RECEIVE_TRONALDDUMP:
    console.log(action.tronaldDump)
      return action.tronaldDump

    default:
      return state
  }
}

export default tronald
