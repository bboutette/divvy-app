import React, { Component } from 'react';
import { database, firebaseListToArray } from '../utils/firebase'
import Goal from './Goal';
import '../css/Goals.css'

class Goals extends Component {
  constructor(props){
    super(props);

    this.state = {
      goals: []
  }
  this.ref = database.ref('/goals');
}

  componentWillMount(){
  this.ref
    .on('value', data => {
      const goals = firebaseListToArray(data.val());
      console.log('Goals: ', goals);

      this.setState({
        goals: goals
      });
    });
  }

  componentWillUnmount(){
  this.ref.off();
  }

  render() {
  const goals = this.state.goals.map(goal => {
    return <Goal key={ goal.id } data={ goal } />;
  });
  return (
    <section className="col-md-8 col-sm-12 goals">
      { goals }
    </section>
  );
  }
}

export default Goals;
