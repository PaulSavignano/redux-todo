import React from 'react'
import { connect } from 'react-redux';
import Todo from '../components/Todo'
import './TodoList.css'

const TodoList = ({ todos, showComplete, searchText }) => {
  return (
    todos.length ?
      <div>
        {todos.map(todo =>
          <Todo key={ todo.id } { ...todo } />
        )}
      </div> :
      <p className="container__message">Nothing to do</p>
  )
}


const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(TodoList)
