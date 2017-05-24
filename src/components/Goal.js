import React, { Component } from 'react';

class Goal extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-11 col-sm-11 quote-text">
            <p>{ this.props.data.text }</p>
            <footer className="quote-author"><cite title="Author">{ this.props.data.author }</cite></footer>
        </div>
      </div>
    );
  }
}

export default Goal;
