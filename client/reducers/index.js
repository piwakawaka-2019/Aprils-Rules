import {combineReducers} from 'redux'

import errorMessage from './error-message'
import tronalddump from './tronalddump'
import nuckchorris from './nuckChorris'
import waiting from './waiting'
import dadjoke from './dadjoke'

export default combineReducers({
  errorMessage,
  tronalddump,
  waiting,
  nuckchorris,
  dadjoke
})
