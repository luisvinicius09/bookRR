import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Router';
import { store } from './state/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
