import React from 'react'



function Button  (){
  return (
    
    
    <div className = "button">
    <button onClick={() => dispatch(Quote('brown eye'))}>
      get Quote
    </button>
   
  </div>
    
    
  )

}



export default Button