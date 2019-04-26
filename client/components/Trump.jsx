import React from 'react'
import {connect} from 'react-redux'




const Trump = ({tronaldDump}) => (
  <div>{tronaldDump}</div>
)

const mapStateToProps = (state) => {
    return {
      tronaldDump: state.tronaldDump
    }
  }
  
  export default connect(
    mapStateToProps
  )(Trump)
