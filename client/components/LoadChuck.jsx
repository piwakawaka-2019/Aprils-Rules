import React from 'react'
import {connect} from 'react-redux'
import {fetchNuckChorris} from '../actions'

const LoadChuck = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchNuckChorris())}>
      Information
    </button>
    {children}
  </div>
)

export default connect()(LoadChuck)
