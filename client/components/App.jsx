import React from 'react'
import Zoom from "react-reveal/Zoom"
import Roll from 'react-reveal/Roll'



import WaitIndicator from './WaitIndicator'
import Header from './Header'
import Button from './Button'
// import Quote from './Quote'
// import Sound from './Sound'
import Video from './video'
import Nav from './Nav'



const App = () => (
  <div className='app'>
     <Nav/>
  <Header/>
  <Button/>
   {/* <Quote/>
  <Sound/>  */}
  <div className="p">
  <p></p>
  </div>
  <Video/> 
     </div>
)

export default App
