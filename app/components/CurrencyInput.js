import React from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: props.initialCurrency || 'USD',
      value: 1
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  render() {
    return (
      <form className="form">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <select name="currency" className="custom-select mr-2 mb-2"
              onChange={this.handleChange} value={this.state.currency}>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="col-auto">
            <input type="text" name="value" className="form-control mr-2 mb-2"
              onChange={this.handleChange} value = {this.state.value}/>
          </div>
        </div>
      </form>
    )
  }
}

CurrencyInput.propTypes = {
  initialCurrency: PropTypes.string
};

export default CurrencyInput
