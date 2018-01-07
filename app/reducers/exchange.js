import { CHANGE_VALUE, CHANGE_CURRENCY } from '../constants/ActionTypes';
import { CURRENCIES, EXCHANGE_RATES } from '../constants/Currencies';

const initialState = {
  base: {
    currency: Object.keys(CURRENCIES)[0],
    value: 1
  },
  quote: {
    currency: Object.keys(CURRENCIES)[0],
    value: 1
  },
  currencies: CURRENCIES,
  exchangeRates: EXCHANGE_RATES,
}

const isValidAmount = value => (
  /^\d+(\.|,)?(\d{0,2})?$/.test(value)
);

const getCurrentExchangeRate = state => (
  state.exchangeRates[state.base.currency][state.quote.currency]
);

const calculateQuoteValue = state => ({
  base: state.base,
  quote: {
    currency: state.quote.currency,
    value: (parseFloat(state.base.value) * getCurrentExchangeRate(state)).toFixed(2),
  },
  currencies: state.currencies,
  exchangeRates: state.exchangeRates,
});

const calculateBaseValue = state => ({
  base: {
    currency: state.base.currency,
    value: (parseFloat(state.quote.value) / getCurrentExchangeRate(state)).toFixed(2)
  },
  quote: state.quote,
  currencies: state.currencies,
  exchangeRates: state.exchangeRates,
});

export default function exchange(state = initialState, action) {
  var tempState = undefined;
  switch(action.type) {
    case CHANGE_VALUE:
      if (!isValidAmount(action.value)) {
        return state
      }

      tempState = Object.assign({}, state);
      tempState[action.emitter].value = action.value;

      switch(action.emitter) {
        case 'base':
          return calculateQuoteValue(tempState);
        case 'quote':
          return calculateBaseValue(tempState);
        default:
          console.error('Unknown emitter!');
          return
      }
    case CHANGE_CURRENCY:
      tempState = Object.assign({}, state);
      tempState[action.emitter].currency = action.currency;

      return calculateQuoteValue(tempState);
    default:
      return state
  }
}
