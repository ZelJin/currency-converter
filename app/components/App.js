import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrencyInput from './CurrencyInput';
import * as Actions from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="container">
        <header className="header clearfix">
          <h3 className="text-muted">Currency converter</h3>
        </header>

        <main role="main">
          <div className="row justify-content-center">
            <div className="col col-sm-auto">
              <CurrencyInput name="base" fields={this.props.base}
                currencies={this.props.currencies} changeValue={this.props.actions.changeValue} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-sm-auto">
              <CurrencyInput name="quota" fields={this.props.quote}
                currencies={this.props.currencies} changeValue={this.props.actions.changeValue} />
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
  currencies: PropTypes.array.isRequired,
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
