import { CHANGE_VALUE } from '../constants/ActionTypes';
import { CURRENCIES, EXCHANGE_RATES } from '../constants/Currencies';

const initialState = {
  base: {
    currency: CURRENCIES[0],
    value: 1
  },
  quote: {
    currency: CURRENCIES[0],
    value: 1
  },
  currencies: CURRENCIES,
  exchangeRates: EXCHANGE_RATES,
}

export default function exchange(state = initialState, action) {
  switch(action.type) {
    case CHANGE_VALUE:
      var newState = Object.assign({}, state);
      newState[action.name] = {
        currency: action.currency,
        value: action.value
      }
      if (isNaN(parseFloat(action.value))) {
        return newState
      }
      var rate = newState.exchangeRates[newState.base.currency][newState.quote.currency];
      if (action.name == 'base') {
        newState.quote.value = parseFloat(newState.base.value) * rate;
      } else {
        newState.base.value = parseFloat(newState.quote.value) / rate;
      }
      return newState
    default:
      return state
  }
}
