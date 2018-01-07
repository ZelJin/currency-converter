import React from 'react';
import PropTypes from 'prop-types';

class ExchangeRateDisplay extends React.Component {
  render() {
    return (
      <h1>ExchangeRateDisplay</h1>
    )
  }
}

ExchangeRateDisplay.propTypes = {
  baseCurrency: PropTypes.object.isRequired,
  quoteCurrency: PropTypes.object.isRequired,
  exchangeRates: PropTypes.object.isRequired,
};

export default ExchangeRateDisplay;
