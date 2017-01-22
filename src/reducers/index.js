import { combineReducers } from 'redux'
import { searchTextReducer } from './reducers'

const rootReducer = combineReducers({
  searchText: searchTextReducer
})

export default rootReducer
