import React from 'react'
import Nav from 'Navbar'
// import Nav from 'react-bootstrap/Button'







const Nav = ()=>{
  return (
    <div>
   <ButtonToolbar>
           <Button variant="primary" size="lg" disabled>
    Primary button
        </Button>{' '}
         <Button variant="secondary" size="lg" disabled>
    Button
         </Button>{' '}
         <Button href="#" variant="secondary" size="lg" disabled>
    Link
         </Button>
</ButtonToolbar>;  
     
   </div>
 )
}




function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
}





export default Nav