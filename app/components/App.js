import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrencyInput from './CurrencyInput';
import ExchangeRateDisplay from './ExchangeRateDisplay';
import * as Actions from '../actions'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header clearfix">
          <h3 className="text-muted">Currency converter</h3>
        </header>

        <main role="main">
          <div className="row justify-content-center">
            <div className="col col-sm-auto">
              <CurrencyInput name="base" fields={this.props.base} currencies={this.props.currencies}
                changeValue={this.props.actions.changeValue} changeCurrency={this.props.actions.changeCurrency}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-sm-auto">
              <CurrencyInput name="quote" fields={this.props.quote} currencies={this.props.currencies}
                changeValue={this.props.actions.changeValue} changeCurrency={this.props.actions.changeCurrency}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-2 mb-2">
            <div className="col col-sm-auto">
              <ExchangeRateDisplay exchangeRates={this.props.exchangeRates}
                baseCurrency={this.props.currencies[this.props.base.currency]}
                quoteCurrency={this.props.currencies[this.props.quote.currency]}
              />
            </div>
          </div>
        </main>

        <footer className="footer">
          &copy; Dmitry Zeldin, 2018
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  base: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  currencies: PropTypes.object.isRequired,
  exchangeRates: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  base: state.exchange.base,
  quote: state.exchange.quote,
  currencies: state.exchange.currencies,
  exchangeRates: state.exchange.exchangeRates,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
