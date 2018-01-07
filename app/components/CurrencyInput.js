import React from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleCurrencyChange(event) {
    this.props.changeCurrency(this.props.name, event.target.value);
  }

  handleValueChange(event) {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {
    return (
      <form className="form">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <select className="custom-select mr-2 mb-2"
              onChange={this.handleCurrencyChange} value={this.props.fields.currency}>
              {this.props.currencies.map((currency, i) =>
                <option key={i} value={currency}>{currency}</option>
              )}
            </select>
          </div>
          <div className="col-auto">
            <input type="number" step="0.01" min="0" max="1000" className="form-control mr-2 mb-2"
              onChange={this.handleValueChange} value ={this.props.fields.value}/>
          </div>
        </div>
      </form>
    )
  }
}

CurrencyInput.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  changeValue: PropTypes.function,
  changeCurrency: PropTypes.function,
};

export default CurrencyInput
