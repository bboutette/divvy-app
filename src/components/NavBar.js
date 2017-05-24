import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser
    }
  }

  sessionState(){
  if (this.props.currentUser){
    return(
      <LogoutButton { ...this.props }  className="link" activeClassName="active"> Logout </LogoutButton>
    )
  } else {
    return <LoginButton { ...this.props } className="link" activeClassName="active"> Login </LoginButton>
  }
}
  profileState(){
    if (this.props.currentUser){
      const link = "/"+this.props.currentUser.uid
      return (
        <Link to={link} activeClassName="active" className="link">Profile</Link>
      )
    }
  }

  render() {
    return (

      <div className="container navContainer">
        <div className="navbar-header navbar navbar-collapse">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <nav className="tabs navbar navbar-default navbar-fixed-top">
            <Link className="navbar-brand" to="/">divvy</Link>
            <ul>
              <li><IndexLink to="/" activeClassName="active" className="link">Home</IndexLink></li>
              <li><Link to="/Learn" activeClassName="active" className="link">Learn</Link></li>
              <li><Link to="/AddGoals" activeClassName="active" className="link">Create a Goal</Link></li>
              <li>{ this.profileState() }</li>
              <li>{ this.sessionState() }</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
