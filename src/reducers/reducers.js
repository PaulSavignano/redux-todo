import uuid from 'uuid'

export const searchText = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
    default:
      return state
  }
}

export const showCompleted = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: Date.now(),
          completedAt: undefined
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const nextCompleted = !todo.completed
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? Date.now() : undefined
          }
        }
      })
    default:
      return state
  }
}
