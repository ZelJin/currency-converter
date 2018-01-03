import React from 'react';
import App from './components/app';
import { render } from 'react-dom';

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
import 'bootstrap';
import './styles/index.scss';

render(
  <App/>,
  document.getElementById('root')
);
