import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index'

const configureStore = () => {
  const store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}

export default configureStore
