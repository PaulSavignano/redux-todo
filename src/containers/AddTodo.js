import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/'
import './AddTodo.css'

class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const { dispatch } = this.props
    const todoText = this.refs.todoText.value
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(addTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input
            type="text"
            ref="todoText"
            placeholder="What do you need to do?"
          />
        <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
