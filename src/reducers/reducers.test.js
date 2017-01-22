import * as actions from './reducers'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      const response = actions.searchTextReducer('', action)
      expect(response).toEqual(action.searchText)
    })
  })
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const response = actions.showCompletedReducer(false, action)
      expect(response).toEqual(true)
    })
  })
})
