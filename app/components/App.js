import React from 'react';
import CurrencyInput from './CurrencyInput';

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
              <CurrencyInput initialCurrency="USD"/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-sm-auto">
              <CurrencyInput initialCurrency="EUR"/>
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

export default App
