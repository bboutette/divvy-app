import React, { Component } from 'react';
import '../css/Avatar.css';

const randomArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];
const avatars = [
  'http://piskel-imgstore-b.appspot.com/img/5d11a9b8-3075-11e7-8664-7378e3ca4582.gif',
  'http://piskel-imgstore-b.appspot.com/img/3d14e997-31ad-11e7-b05c-19aba524883f.gif',
  'http://piskel-imgstore-b.appspot.com/img/afb4e52b-3075-11e7-aea4-7378e3ca4582.gif',
  'http://piskel-imgstore-b.appspot.com/img/7c6fa007-30d9-11e7-b1d6-7378e3ca4582.gif',
];

class Avatar extends Component {
  render() {
    let randomUrl = randomArrayElement(avatars);
    return(
      <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="col-sm-12 col-md-6 avatarBox">
          <div className="avatarTitle">
            Your Avatar
            <br/><br />
            <img src={randomUrl} className="avatarImage"/>
            <br/>
          </div>
        </div>
      </div>
    );
  };
};

export default Avatar;
