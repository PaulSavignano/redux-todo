import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { fetchLocation, changeName, addHobby, addMovie, removeHobby, removeMovie } from './actions/index'
import configureStore from './store/configureStore'

const store = configureStore()


const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state)
  if (state.map.isFetching) {
  } else if (state.map.url) {
    console.log(state.map.url)
  }
})

const currentState = store.getState();

console.log('currentState', currentState)


store.dispatch(fetchLocation())
store.dispatch(changeName('Paul'))
store.dispatch(addHobby('Running'))
store.dispatch(addHobby('Walking'))
store.dispatch(addMovie('La La Land', 'Musical'))
store.dispatch(addMovie('Accountant', 'Action'))
store.dispatch(removeHobby(1))
store.dispatch(removeMovie(1))


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
