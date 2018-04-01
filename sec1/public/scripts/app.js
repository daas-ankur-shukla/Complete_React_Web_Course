'use strict';

console.log('App.js is running!');

var app = {
  name: 'Ankur Shukla',
  age: 26,
  location: 'Mumbai'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.name
  ),
  React.createElement(
    'p',
    null,
    app.age
  ),
  React.createElement(
    'p',
    null,
    app.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
