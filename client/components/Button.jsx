import React from 'react'
import Zoom from "react-reveal/Zoom";
import {connect} from 'react-redux'
import {fetchTronaldDump} from '../actions'

function Button  (){
  return (
    
    
    <div className = "button">
    <Zoom>
    <button onClick={() => dispatch(fetchTronaldDump())}>Click For Intelligence</button>
   </Zoom>
   





  </div>
    
    
  )

}


export default Button 
// export default connect (LoardTrump) (Button)