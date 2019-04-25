import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  console.log(action.tronaldDump)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.tronaldDump

    default:
      return state
  }
}

export default subreddits
