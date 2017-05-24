import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/AddGoals.css';

class AddGoals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      val: 0,
      perDay: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  changeValue = (val) => {
    // console.log('value is: ',val)
    // console.log('please work')
    this.setState({
      amount: val
    })
  }
  buttonSubmit()  {
    let numVal = this.state.amount.replace(/\$/g, '');
    this.setState({
      days: this.state.dateDif,
      daily: ("$"+ (numVal/this.state.dateDif).toFixed(2))
    })
    // console.log("Button was clicked and value is ", this.changeValue)
    // console.log("startDate",this.state.startDate)
    console.log("goal cost is  ",this.state.amount)
    console.log("number of days needed to save", this.state.dateDif)
    console.log("amount needed per days is $" + (numVal/this.state.dateDif).toFixed(2))
    console.log("You need: ", this.state.daily ,"a day");
    this.setState({
      perDay: (numVal/this.state.dateDif).toFixed(2)
    })
    // let days = `datedif  , this.state.dateDif `;
    // let daily = "$" + (numVal/this.state.dateDif).toFixed(2))
    return (
      <div>{this.state.daily}</div>
    )
  }
  // class SaveGoals extends Component {
  //
  // }
  // <button><Link to="/Goals" activeClassName="active" className="link">Save Goals!</Link></button>
render(){
   return (
        <div className="container-fluid">
          <div className="aGContent row">
            <div>
              <div className="formBox">
                <div className="formContent">
            <p className="howMuch">Create a New Goal</p>
            <br/>
            <CurrencyInput
              value={this.state.amount}
              prefix={"$"}
              onChange={this.changeValue}
              className="currencyInput"
            />
            <br/>
            <br/>
            <DatePicker
              className="dateInput"
              selected={this.state.startDate}
              onChange={this.handleChange}
              onSelect={
                (value) => {
                  const dateDif = Math.round((new Date(value._d)-new Date())/(24*60*60*1000));
                  let goalDate = value._d;
                  console.log('Days Difference is ', dateDif)
                  console.log('Goal end date is ', goalDate)
                  this.setState({
                    dateDif: dateDif
                  });
                }
              }
            />
            <br/><br/><br/>
            <button activeClassName="active" className="link submitGoal" name="" onClick={this.buttonSubmit.bind(this)}>Get Results!</button>
            <div className="perDay">
              Save Daily:<br/>
              <span class="renderPerDay">
                 ${ this.state.perDay }
              </span>
            </div>
          </div>
           </div>
         </div>
         </div>
           <br/><br/><br/>
       </div>
      )
    }
}
export default AddGoals;
