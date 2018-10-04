'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

var resetOptions = function resetOptions() {
  app.options = [];
  renderApp();
};

var onDecisionMake = function onDecisionMake() {
  var randNumber = Math.floor(Math.random() * app.options.length);
  alert(app.options[randNumber]);
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitile
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your ' + app.options.length + ' options' : 'No options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.length > 0 ? app.options.map(function (opt) {
        return React.createElement(
          'li',
          { key: opt.toString() },
          opt
        );
      }) : ''
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length == 0, onClick: onDecisionMake },
        'What Should I do?'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length == 0, onClick: resetOptions },
        'Reset'
      )
    )
  );
  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderApp();
