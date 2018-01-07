import * as types from '../constants/ActionTypes';
import fetch from 'cross-fetch';

export const changeValue = (emitter, value) => ({
  type: types.CHANGE_VALUE,
  emitter: emitter,
  value: value,
});

export const changeCurrency = (emitter, currency) => ({
  type: types.CHANGE_CURRENCY,
  emitter: emitter,
  currency: currency,
});

export const receiveExchangeRates = (rates) => ({
  type: types.RECEIVE_EXCHANGE_RATES,
  rates
});

const getExchangeRates = (dispatch, baseCurrency, currencies) => {
  var url = `https://api.fixer.io/latest?base=${baseCurrency}&symbols=${currencies}`;
  return fetch(url)
  .then(
    response => response.json(),
    error => console.log('An error occured.', error)
  )
  .then(
    json => dispatch(receiveExchangeRates(json))
  )
}

export const updateExchangeRates = (currencies) => (
  dispatch => {
    currencies.forEach(currency => {
      getExchangeRates(dispatch, currency, currencies)
    });
  }
);
