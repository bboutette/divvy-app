import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class LogoutButton extends Component {
  render() {
    return (
      <IndexLink to="/" onClick={ this.props.handleLogout }>{ this.props.children }</IndexLink>
    )
  }
}

export default LogoutButton;
