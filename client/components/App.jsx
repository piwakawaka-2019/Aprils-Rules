import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import LoadTrump from './LoadTrump';
import LoadChuck from './LoadChuck';
import LoadJoke from './LoadJoke';
import Trump from './Trump'
import Chuck from './Chuck'
import Sounds from './Random-Sound'
import Joke from './Joke'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadTrump >
      <WaitIndicator />
    </LoadTrump>
    <LoadChuck >
      <WaitIndicator />
    </LoadChuck>
    <LoadJoke >
      <WaitIndicator />
    </LoadJoke>
    <Trump />
    <Chuck />
    <Joke />
    <button><Sounds />Yeet</button>
  </div>
)

export default App
