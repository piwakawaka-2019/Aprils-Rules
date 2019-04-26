import React from 'react'
import Zoom from "react-reveal/Zoom";


function Button  (){
  return (
    
    
    <div className = "button">
    <Zoom>
    <button onClick={() => dispatch(Quote('brown eye'))}>Click For Intelligence</button>
   </Zoom>






  </div>
    
    
  )

}



export default Button