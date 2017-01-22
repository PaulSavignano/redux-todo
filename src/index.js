import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from './actions/index'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(addTodo('Clean the yard'))
store.dispatch(setSearchText('yard'))
store.dispatch(toggleShowCompleted())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
