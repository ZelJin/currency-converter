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
      return state
    default:
      return state
  }
}
