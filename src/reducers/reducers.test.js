import * as reducers from './reducers'

describe('Reducers', () => {
  describe('searchText', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      const response = reducers.searchText('', action)
      expect(response).toEqual(action.searchText)
    })
  })
  describe('showCompleted', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const response = reducers.showCompleted(false, action)
      expect(response).toEqual(true)
    })
  })
  describe('todos', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }
      const response = reducers.todos([], action)
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
      const response = reducers.todos(todos, action)
      expect(response[0].completed).toEqual(false)
      expect(response[0].completedAt).toEqual(undefined)
    })
  })
})
