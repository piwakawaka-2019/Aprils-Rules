import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import LoadSubreddit from './LoadSubreddit';
import Post from './Post'
import Sounds from './Random-Sound.jsx'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit >
      <WaitIndicator />
    </LoadSubreddit>
    <Post />
    <Sounds />
  </div>
)

export default App
