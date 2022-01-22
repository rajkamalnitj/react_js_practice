import React, { Component } from 'react';
class greet2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: false,
    };
  }

  render() {
    var message = <div> hello rajkamal</div>;

    if (this.state.isloggedin) {
      message = <div> hello rajkamal</div>;
    } else message = <div> bhaag bsdk</div>;

    return message;
  }
}

export default greet2;
