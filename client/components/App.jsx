import React, { Component } from "react";
import { getQuotes } from '../api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getQuotes: {},
    };
  }

  trumpQuote(value) {
    this.setState({
      getQuotes: {
        value
      },
  })
  }


  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <p>{this.state.api.value}</p>
      </React.Fragment>
    );
  }
}

export default App;
