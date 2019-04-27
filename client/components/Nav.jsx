import React from 'react'
import {connect} from 'react-redux'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

import LoadJoke from './LoadJoke';
import Sounds from './Random-Sound'

import {fetchNuckChorris} from '../actions'
import {fetchDadJoke} from '../actions'


const Nav = ()=>{
  return (
              
              <div>
                <Roll/>
            <div className="navbar">
            <Zoom>
            <button href="">Contact us</button>
            </Zoom>
            <Zoom>
            <button href="https://www.youtube.com/watch?v=djV11Xbc914">Take on Me</button>
            </Zoom>
            <Zoom>
            <button onClick={() => dispatch(fetchNuckChorris())}>Information</button>
            </Zoom>
            <Zoom>
            <button onClick={() => dispatch(fetchNuckChorris())}></button>
          </Zoom>
            
            <Roll/>

          </div>
         
   </div>
 )
}





export default connect()(Nav)

