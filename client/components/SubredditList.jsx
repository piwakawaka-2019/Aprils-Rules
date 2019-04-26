import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={tr.title}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    tronaldDump: state.tonaldDump
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
