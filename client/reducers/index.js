import {combineReducers} from 'redux'

import errorMessage from './error-message'
import tronaldDump from './tronaldDump'
import nuckChorris from './nuckChorris'
import waiting from './waiting'
import dadJoke from './dadjoke'

export default combineReducers({
  errorMessage,
  tronalddump,
  waiting,
  nuckchorris,
  dadjoke

})
