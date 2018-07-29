import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount:  props.expense ? (props.expense.amount / 100).toString() : '',
      calendarFocused: false,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      error: '',
      note: props.expense ? props.expense.note : ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  };

  onChangeAmount = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused}));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount){
      this.setState(() => ({ error: 'Please provide description and amount.'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text" placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChangeAmount}

          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
          >
          </textarea>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    )
  }

}