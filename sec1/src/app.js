console.log('App.js is running!');

var app = {
  name: 'Ankur Shukla',
  age: 26,
  location: 'Mumbai'
};

var template = (
  <div>
    <h1>{app.name}</h1>
    <p>{app.age}</p>
    <p>{app.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
