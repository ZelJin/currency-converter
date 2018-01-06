import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducers';

import 'bootstrap';
import './styles/index.scss';
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
