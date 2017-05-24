import React, { Component } from 'react';
import '../css/Home.css';
import {Link} from 'react-router';

class Home extends Component {
  render(){
    return(
      <div className="home container">
        <div className="homeContent container">
          <div className="row">
            <div className="col-md-offset-2 col-md-3 col-sm-3 lT">
              <div className="lT1">
                <span className="lT2">
                  Learn to Save<br/>
                </span>
                <span className="lT3">
                  it's never been so fun!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blueContainer container">
          <div className="row">
            <div onClick={ this.props.handleSaveMoney } className="col-md-offset-1 col-md-6 aT">
              Save Your Money
            </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-6">
              <div className="aT1">
                Earn stars
              </div>
            </div>
          </div>
          <div className="row aboutRow">
            <div className="col-md-offset-2 col-md-9 aBCol">
              <Link to="/AddGoals">
                <div className="col-md-4 col-sm-12 aB">
                  CREATE A GOAL<br/>
                  <span className="aBLogo">
                    +
                  </span>
                </div>
              </Link>
            <Link to="/AddGoals">
              <div className="col-md-4 col-sm-1 aB">
                SAVE DAILY<br/>
                <span className="aBLogo">
                  $
                </span>
              </div>
            </Link>
            <Link to="/AddGoals">
              <div className="col-md-4 col-sm-12 aB">
                WIN STARS<br/>
                <span className="aBLogo">
                  ★
                </span>
              </div>
            </Link>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-offset-2 col-md-4 aB2">
            </div> */}
          </div>
          </div>
        </div>
        <div className="aboutContent container">
          <div className="row">
            <div className="col-md-offset-1 col-md-6 col-sm-6">
                <div className="aT2">
                  Entertaining & Educating<br/>
                </div>
                <span className="aT1">
                  about divvy
                </span>
                <br/><br/>
                <div className="aboutUs">
                    <p>
                    divvy is a platform to teach yourself money-managing skills that will help you be financially responsible.
                    <br/><br/>
                    This is more text to make it seem like this is a legitimate website with legitimate offerings to you, the user! Other words would go right here to really sell it to you.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
