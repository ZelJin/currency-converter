import * as types from '../constants/ActionTypes';

export const changeValue = (emitter, currency, value) => ({
  type: types.CHANGE_VALUE,
  emitter: emitter,
  currency: currency,
  value: value,
});
