import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: 'click me to visit Google'
}; 

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const anotherElement = (
  <a href='http://google.com' target='_blank' >visit google</a>
);

const areactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click to visit google'
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
