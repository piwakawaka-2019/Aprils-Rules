import React from 'react'
import Roll from 'react-reveal/Roll';

const Video = () => {
  return(
    <div >
    <Roll left>
    <div className="">
    <iframe width="100%" height="600" src="https://www.youtube.com/embed/F3nZu5JrLK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </Roll>
    <div>
      <Roll>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jk-xUMvXvwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Roll>
    </div>
    <div>
      <Roll>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/R6FhEW7T7I0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Roll>
    </div>
</div>
  )
}





export default Video