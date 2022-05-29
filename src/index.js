import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'
import './index.css'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.querySelector('#root'))


// render(<App />,
//   document.querySelector('#root'))


// ===============================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// ==================================

console.log('hi')