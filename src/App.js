import React, {Component} from 'react';
import dotenv from 'dotenv';
import {
  BrowserRouter as Router,
  Route
} from 'react-router';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { firebase, auth } from './utils/firebase';

dotenv.config({silent:true});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log('Auth State Changed', currentUser);

      if (currentUser){
        this.setState({
          currentUser: currentUser
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
  }

handleLogin(e){
  e.preventDefault();
  console.log('Login button clicked');

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result){

      console.log('Fuck yeah. Result: ', result);

      }).catch(function(error){
      console.log('Error: ', error);
    })
  }


handleLogout(e){
  e.preventDefault();
  console.log('Logout button clicked');
  auth.signOut();
}


  render() {
    return (
    <div className="App">
      <NavBar
      handleLogout={ this.handleLogout }
      handleLogin={ this.handleLogin }
      currentUser={ this.state.currentUser }/>
      <div className="content">
        {this.props.children}
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
