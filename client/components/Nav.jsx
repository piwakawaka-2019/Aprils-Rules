import React from 'react'
import Zoom from "react-reveal/Zoom"
import Roll from 'react-reveal/Roll'






const Nav = ()=>{
  return (
    <div>
  <div className="navbar">
  <Zoom>
  <button href="">0x0</button>
  </Zoom>
  <Zoom>
  <button href="https://www.youtube.com/watch?v=djV11Xbc914">Take on Me</button>
  </Zoom>
  <Zoom>
  <button href="#news">News</button>
  </Zoom>

</div>
   </div>
 )
}




// function simulateNetworkRequest() {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// }

// class LoadingButton extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleClick = this.handleClick.bind(this);

//     this.state = {
//       isLoading: false,
//     };
//   }

//   handleClick() {
//     this.setState({ isLoading: true }, () => {
//       simulateNetworkRequest().then(() => {
//         this.setState({ isLoading: false });
//       });
//     });
//   }

//   render() {
//     const { isLoading } = this.state;

//     return (
//       <Button
//         variant="primary"
//         disabled={isLoading}
//         onClick={!isLoading ? this.handleClick : null}
//       >
//         {isLoading ? 'Loading…' : 'Click to load'}
//       </Button>
//     );
//   }
// }





export default Nav