import React from 'react'
import {connect} from 'react-redux'




const Chuck = ({nuckChorris}) => (
  <div>{nuckChorris}</div>
)

const mapStateToProps = (state) => {
    return {
      nuckChorris: state.nuckChorris
    }
  }
  
  export default connect(
    mapStateToProps
  )(Chuck)
