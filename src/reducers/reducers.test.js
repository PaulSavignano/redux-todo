import * as reducers from './reducers'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      const response = reducers.searchTextReducer('', action)
      expect(response).toEqual(action.searchText)
    })
  })
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const response = reducers.showCompletedReducer(false, action)
      expect(response).toEqual(true)
    })
  })
  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }
      const response = reducers.todosReducer([], action)
      expect(response.length).toEqual(1)
      expect(response[0].text).toEqual(action.text)
    })
    it('should toggle todo', () => {
      const todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]
      const action = {
        type: 'TOGGLE_TODO',
        id: '123',
      }
      const response = reducers.todosReducer(todos, action)
      expect(response[0].completed).toEqual(false)
      expect(response[0].completedAt).toEqual(undefined)
    })
  })
})
