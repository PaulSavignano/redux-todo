import * as actions from './index'

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    const response = actions.setSearchText(action.searchText)
    expect(response).toEqual(action)
  })
  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }
    const response = actions.addToDo(action.text)
    expect(response).toEqual(action)
  })
  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const response = actions.toggleShowCompleted()
    expect(response).toEqual(action)
  })
  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    const response = actions.toggleTodo(action.id)
    expect(response).toEqual(action)
  })
})
