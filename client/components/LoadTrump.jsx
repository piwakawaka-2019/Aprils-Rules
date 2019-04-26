import React from 'react'
import {connect} from 'react-redux'
import {fetchTronaldDump} from '../actions'

const LoadTrump = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchTronaldDump())}>
      Click for Intelligence
    </button>
    {children}
  </div>
)

export default connect()(LoadTrump)
