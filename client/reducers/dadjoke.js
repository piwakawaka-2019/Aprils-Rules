import {RECEIVE_DADJOKE} from '../actions'

function dad (state = [], action) {
  console.log(action)
  switch (action.type) {
    case RECEIVE_DADJOKE:
      return action.dadJoke

    default:
      return state
  }
}

export default dad
