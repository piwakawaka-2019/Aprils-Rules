import React from 'react'
import {connect} from 'react-redux'




const Joke = ({dadJoke}) => (
 
  <div>{dadJoke}</div>
)

const mapStateToProps = (state) => {
  
    return {
      dadJoke: state.dadJoke
    }
  }
  
  export default connect(
    mapStateToProps
  )(Joke)
