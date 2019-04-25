import {RECEIVE_TRONALDDUMP} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_TRONALDDUMP:
    console.log(action.tronaldDump)
      return action.tronaldDump

    default:
      return state
  }
}

export default subreddits
