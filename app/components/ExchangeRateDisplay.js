import React from 'react';
import PropTypes from 'prop-types';

class ExchangeRateDisplay extends React.Component {
  render() {
    console.log(this.props);
    const exchangeRate = this.props.exchangeRates[this.props.baseCurrency.code][this.props.quoteCurrency.code];
    return (
      <button type="button" className="btn btn-light">
         {this.props.baseCurrency.symbol}1 = {this.props.quoteCurrency.symbol}{exchangeRate.toFixed(4)}
      </button>
    )
  }
}

ExchangeRateDisplay.propTypes = {
  baseCurrency: PropTypes.object.isRequired,
  quoteCurrency: PropTypes.object.isRequired,
  exchangeRates: PropTypes.object.isRequired,
};

export default ExchangeRateDisplay;
