import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import LoadSubreddit from './LoadSubreddit';
import Post from './Post'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit >
      <WaitIndicator />
    </LoadSubreddit>
    <Post />
  </div>
)

export default App
