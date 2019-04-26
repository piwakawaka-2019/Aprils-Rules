import {RECEIVE_TRONALDDUMP} from '../actions'

function tronald (state = [], action) {
  switch (action.type) {
    case RECEIVE_TRONALDDUMP:
      return action.tronaldDump

    default:
      return state
  }
}

export default tronald