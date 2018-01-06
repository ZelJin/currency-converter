import * as types from '../constants/ActionTypes';

export const changeCurrency = (currency, emitter) => ({
  type: types.CHANGE_CURRENCY,
  currency: currency,
  emitter: emitter,
});

export const changeValue = (value, emitter) => ({
  type: types.CHANGE_VALUE,
  value: value,
  emitter: emitter,
});
