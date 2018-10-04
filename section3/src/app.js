console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

const resetOptions = () => {
  app.options = []
  renderApp();
};

const onDecisionMake = () => {
  const randNumber = Math.floor(Math.random() * app.options.length);
  alert(app.options[randNumber]);
}

const renderApp = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitile}</p>}
    <p>{app.options.length > 0 ? 'Here are your ' + app.options.length + ' options' : 'No options'}</p>
    <ol>
    {app.options.length > 0 ? app.options.map((opt) => <li key={opt.toString()}>{opt}</li>) : ''}
    </ol>
    <form onSubmit = {onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    <button disabled={app.options.length == 0} onClick = {onDecisionMake}>What Should I do?</button>
    <button disabled={app.options.length == 0} onClick = {resetOptions}>Reset</button>
    </form>
    </div>
  );
  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

renderApp();
