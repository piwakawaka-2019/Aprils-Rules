import React from 'react'
import {connect} from 'react-redux'
import {fetchDadJoke} from '../actions'

const LoadJoke = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchDadJoke())}>
      Contact us
    </button>
    {children}
  </div>
)

export default connect()(LoadJoke)
