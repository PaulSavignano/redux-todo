import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import './index.css';

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from './actions/index'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
  console.log('New state', store.getState())
})


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
