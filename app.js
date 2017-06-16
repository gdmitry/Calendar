import ReactDOM from 'react-dom';
import React from 'react';
import Calendar  from './components/Calendar';

require('./styles/base.sass');

ReactDOM.render(
  <Calendar />,
  document.getElementById('app')
);


var store = require('store.js');
console.log(store.set);