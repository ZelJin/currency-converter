import * as types from '../constants/ActionTypes';

export const changeValue = (name, currency, value) => ({
  type: types.CHANGE_VALUE,
  name: name,
  currency: currency,
  value: value,
});
