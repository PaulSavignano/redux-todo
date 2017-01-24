import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchText, toggleShowCompleted } from '../actions/index'
import './TodoSearch.css'

class TodoSearch extends Component {
  constructor() {
    super()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleSearch(dispatch) {
    const searchText = this.refs.searchText.value
    dispatch(setSearchText(searchText))
  }
  handleToggle(dispatch) {
    dispatch(toggleShowCompleted())
  }
  render() {
    const { dispatch, showCompleted, searchText } = this.props
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search Todos"
            value={ searchText }
            onChange={ () => this.handleSearch(dispatch) }
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={ showCompleted }
              onChange={ () => this.handleToggle(dispatch) }
            />
          </label>
        </div>
      </div>
    )
  }
}

export default connect()(TodoSearch)
