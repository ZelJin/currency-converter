import * as types from '../constants/ActionTypes';

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

export const updateExchangeRates = () => ({
  type: types.UPDATE_EXCHANGE_RATES,
});
