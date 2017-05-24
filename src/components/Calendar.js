import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  _handleSubmit(e){

    let newDate = this.refs.startDate.value;
    this.props.addDate(newDate);
    this.refs.startDate.value = '';

  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        onChange={(value) => console.log('Days Difference is ',(Math.round((new Date(value._d)-new Date())/(24*60*60*1000))))}
    />;
  }
}

export default Calendar;
