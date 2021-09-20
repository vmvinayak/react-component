import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


import { Provider } from 'react-redux'
import store from './redux/store'

let comp = (<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>)

// ReactDOM.render(
//   comp,
//   document.getElementById('root')
// );

export default comp;

