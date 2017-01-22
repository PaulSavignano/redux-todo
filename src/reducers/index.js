import { combineReducers } from 'redux'
import {
  searchText,
  showCompleted,
  todos
} from './reducers'

const rootReducer = combineReducers({
  searchText,
  showCompleted,
  todos
})

export default rootReducer
