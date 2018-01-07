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

const isValidAmount = value => (
  /^\d+(\.|,)?(\d{0,2})?$/.test(value)
);

const getCurrentExchangeRate = state => (
  state.exchangeRates[state.base.currency][state.quote.currency]
);

const calculateQuoteValue = state => {
  const rate = getCurrentExchangeRate(state);
  state.quote.value = (parseFloat(state.base.value) * rate).toFixed(2);
};

const calculateBaseValue = state => {
  const rate = getCurrentExchangeRate(state);
  state.base.value = (parseFloat(state.quote.value) / rate).toFixed(2);
};

export default function exchange(state = initialState, action) {
  switch(action.type) {
    case CHANGE_VALUE:
      if (!isValidAmount(action.value)) {
        return state
      }

      var newState = Object.assign({}, state);
      newState[action.emitter] = {
        currency: action.currency,
        value: action.value
      }

      switch(action.emitter) {
        case 'base':
          calculateQuoteValue(newState);
          break
        case 'quote':
          calculateBaseValue(newState);
          break
        default:
          console.error('Unknown emitter!');
      }
      return newState;
    default:
      return state
  }
}
