import React from 'react'

import ErrorMessage from './ErrorMessage'

import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Header from './Header'
import Button from './Button'
// import Quote from './Quote'
// import Sound from './Sound'
// import Video from './video'




const App = () => (
  <div className='app'>
  <Header/>
  <Button/>
  {/* <Quote/>
  <Sound/>
  <Video/> */}
    <ErrorMessage />
    <SubredditList />
  </div>
)

export default App
