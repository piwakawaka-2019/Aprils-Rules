import {combineReducers} from 'redux'

import errorMessage from './error-message'
import tronaldDump from './tronaldDump'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  tronaldDump,
  waiting
})
