import { CHANGE_CURRENCY, CHANGE_VALUE } from '../constants/ActionTypes';
import { CURRENCIES } from '../constants/Currencies';

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
  exchangeRates: generateExchangeRates()
}

const generateExchangeRates = (() => {
  var rootRates = {};
  CURRENCIES.forEach(baseCurrency => {
    var baseRates = {};
    CURRENCIES.forEach(quoteCurrency => {
      baseRates[quoteCurrency] = 1;
    });
    rootRates[baseCurrency] = baseRates;
  });
});

export default function converter(state = initialState, action) {
  switch(action.type) {
    case CHANGE_CURRENCY:
      return state
    case CHANGE_VALUE:
      return state
    default:
      return state
  }
}
