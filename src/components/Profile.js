import React, { Component } from 'react';
import Avatar from './Avatar';
import Goals from './Goals';
import ProgressBar from './ProgressBar';
import '../css/Profile.css';
import { Link } from 'react-router';
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

  userInfo(){
    if (this.state.currentUser) {
      console.log('traaaash: ', this.state.currentUser);
      return (
        <span>{this.state.currentUser.displayName}</span>
      )
    }
}
sessionState(){
  if (this.state.currentUser) {
    return(
      <div className="profileContent">
        <div className="row">
          <div className="col-md-offset-2 col-md-3 col-sm-3">
            <Link to="/Profile">
              <div className="avatar">
                <div>
                  <br/>
                  <Avatar/>
                </div>
                <br/>
              </div>
            </Link>
        </div>
        <div className="col-md-4 col-sm-3 rT">
          <div className="userInfoBox">
            <span className="userInfo">
              <ul>
                <li>Name: Matthew Tan</li>
                <li>Points Earned: 0</li>
                <li>Active Goals: 2</li>
                <li><Link to="/AddGoals" className="linkProfile" href="#">Create New Goal</Link></li>
              </ul>
            </span>
          </div>
          <span className="goals">
            <Goals />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="container">
        <div className="col-md-offset-1 col-md-8 col-sm-3 goalBox">
          <div className="goalTitle">
            Shoes
          </div><br/>
          <div className="goalTotalInfo">
            TOTAL AMOUNT: $100.00<br/><br/>
            CURRENT AMOUNT: $50.00<br/><br/>
            <ProgressBar percent={50} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="container">
      <div className="col-md-offset-1 col-md-8 col-sm-3 goalBox">
        <div className="goalTitle">
          Nintendo Switch
        </div><br/>
        <div className="goalTotalInfo">
          TOTAL AMOUNT: $500.00<br/><br/>
          CURRENT AMOUNT: $122.63<br/><br/>
          <ProgressBar percent={25} />
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  } else {
    return(
      <div className="learnOne"> You must login to store goals </div>
    )
  }
}
  render(){

    return (
      <div className="profile">
        { this.sessionState() }
      </div>
    )
  }
}

export default Profile;
