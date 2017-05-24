import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <a onClick={ this.props.handleLogin }>{ this.props.children }</a>
    )
  }
}

export default LoginButton;
