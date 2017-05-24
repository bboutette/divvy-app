import React, { Component } from 'react';
import Avatar from './Avatar';
import Goals from './Goals';
import ProgressBar from './ProgressBar';
import '../css/Profile.css';
import { firebaseListToArray, database } from '../utils/firebase';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: this.props.params.profileId,
      goals: []
    }
  }

  componentWillMount() {
    if (this.state.currentUser){
      database.ref('/users/'+this.state.currentUser.uid).on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('user database results: ', results);

        this.setState({
          goals: results
        })
      })
    }
  }

  userGoals(){
    if (this.state.currentUser) {
      return (
        <div className="profile">
          <div className="profileContent">
            <div className="row">
              <div className="col-md-12 col-sm-3">
              <div className="avatar">
                <div>
                  <br/>
                  <Avatar />
                </div>
                <br/>
              </div>
            </div>
            <div className="col-md-6 col-sm-3 rT">
              <div>
                <span className="userInfo">
                  <ul>
                    <li>Name:</li>
                    <li>Points Earned:</li>
                    <li>Active Goals:</li>
                    <li><a href="#">Create New Goal</a></li>
                  </ul>
                </span>
              </div>
              <span className="goals">
                <Goals />
              </span>
            </div>
            <div className="col-md-offset-1 col-md-6 col-sm-3 rT">
              <h3>Only 50%? Why can't you be better? Keep going!</h3>
              <ProgressBar percent={50} />
            </div>
          </div>
          </div>
        </div>
      )
    } else {
      return (
        <p>Login or sign up to save goals.</p>
      )
    }
  }

  render(){

    return(
      <div>
        { this.userGoals() }
      </div>
    )
  }
}

export default Profile;
