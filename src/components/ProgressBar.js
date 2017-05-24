import React, { Component } from 'react';
import '../css/ProgressBar.css'

// <ProgressBar percent={50%} />

class ProgressBar extends Component {
  render() {
      let percent = Math.round(this.props.percent);

      return (
        <div className={`progress-bar-container default`}>
            <div className="progress-bar-inner" style={{width: `${percent}%`}}>{percent}%</div>
        </div>
      );
  }
}

export default ProgressBar;
