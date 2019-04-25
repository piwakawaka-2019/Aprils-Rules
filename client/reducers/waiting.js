import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_TRONALDDUMP} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_TRONALDDUMP:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
