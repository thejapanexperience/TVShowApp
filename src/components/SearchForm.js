import React, { Component } from 'react'
import MovieActions from '../actions/MovieActions'

export default class SearchForm extends Component {
  constructor() {
    super();
    this._submitForm= this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();

    let { searchInput } = this.refs

    let query = searchInput.value;
    searchInput.value = '';
    console.log(query)
    MovieActions.searchTitle(query)


  }

  render() {
    return (
        <form className="form-inline" onSubmit={this._submitForm}>
          <div className="form-group">
            <label className="sr-only">Search TV Show Title:</label>
            <input ref='searchInput' type="text" className="form-control" defaultValue="Simpsons"/>
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>


    )
  }
}
