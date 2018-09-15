'use strict';

console.log('App.js is running!');

var count = 0;

var add = function add() {
  count++;
  renderApp();
};

var sub = function sub() {
  count--;
  renderApp();
};

var reset = function reset() {
  count = 0;
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: add },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: sub },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
