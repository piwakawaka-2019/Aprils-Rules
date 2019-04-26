import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_TRONALDDUMP, 
  RECEIVE_NUCKCHORRIS} from '../actions'
 

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_TRONALDDUMP:
      return false
    
    case RECEIVE_NUCKCHORRIS:
      return false


    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
