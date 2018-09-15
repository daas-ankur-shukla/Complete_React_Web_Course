console.log('App.js is running!');

let count=0

const add = () => {
  count++;
  renderApp();
}

const sub = () => {
  count--;
  renderApp();
}

const reset = () => {
  count=0;
  renderApp();
}


var appRoot = document.getElementById('app');


const renderApp = () => {
  var template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
