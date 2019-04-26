import React from 'react'
import {connect} from 'react-redux'
import {fetchTronaldDump} from '../actions'

const LoadSubreddit = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchTronaldDump())}>
      Fetch Post
    </button>
    {children}
  </div>
)

export default connect()(LoadSubreddit)