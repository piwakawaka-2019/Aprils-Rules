import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import LoadSubreddit from './LoadSubreddit';
import Post from './Post'
import Sounds from './Random-Sound'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit >
      <WaitIndicator />
    </LoadSubreddit>
    <Post />
    <button><Sounds />Yeet</button>
  </div>
)

export default App
