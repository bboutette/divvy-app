import React, {Component} from 'react';
// import {IndexLink, Link} from 'react-router';

class Footer extends Component {
  render() {
    return (

    <div className="footerContainer container-fluid">
        <div className="row footerRow">
            <div className="col-md-offset-1 col-md-2">
              <ul className="nav nav-pills nav-stacked">
                <li><h4>Our Goal</h4></li>
                <li><p>is to educate young adults and adolescents about financial responsibility in a fun and engaging way.</p></li>
              </ul>
            </div>
            <div className="col-md-offset-2 col-md-2">
              <ul className="nav nav-pills nav-stacked footerText">
                <li><h4>About</h4></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="nav nav-pills nav-stacked footerText">
                <li><h4>Contact</h4></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Share Your Story</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="nav nav-pills nav-stacked footerText">
                <li><h4>Download Our App</h4></li>
                <li><a href="#">iOS</a></li>
                <li><a href="#">Android</a></li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;
