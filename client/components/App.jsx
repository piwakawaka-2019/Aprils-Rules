import React from 'react'



import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import LoadTrump from './LoadTrump'
import LoadChuck from './LoadChuck'
import LoadJoke from './LoadJoke'
import Trump from './Trump'
import Chuck from './Chuck'
import Sounds from './Random-Sound'
import Joke from './Joke'
import Header from './Header'
// import Button from './Button'
import Video from './video'
// import Nav from './Nav'

const App = () => (
  <div className='app'>
      {/* <Nav  /> */}
      <Header />
      {/* <Button /> */}
       <button><Sounds />Yeet</button>
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
    <Video />
   
  </div>
)

export default App
