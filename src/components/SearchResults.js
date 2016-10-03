import React, { Component } from 'react'
import SearchStore from '../stores/SearchStore'
import MovieActions from '../actions/MovieActions'
import { browserHistory } from 'react-router'


export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: SearchStore.get(),
      favourites: SearchStore.getFavourites()
    }

    this._onChange = this._onChange.bind(this);
    this._favourite = this._favourite.bind(this);
    this._unfavourite = this._unfavourite.bind(this);
    // this._selectTitle = this._selectTitle.bind(this);

  }

  componentWillMount() {
    SearchStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      results: SearchStore.get(),
      favourites: SearchStore.getFavourites()
    })
  }

  _favourite(name) {
    MovieActions.favourite(name)
  }

  _unfavourite(name) {
    MovieActions.unfavourite(name)
  }

  render() {


    let { results, favourites } = this.state;
    console.log(favourites)
    let strFavourites=""
    if (favourites){
      strFavourites = favourites
    } else {
      strFavourites = "there's no favourites"
    }


    if(results.length>0){

      return (
        <div>

          <table className="table table-hover">
            <thead>

            </thead>
            <tbody>
              {results.map((show) =>
                (
                <tr key={show.show.id}>
                <td>{show.show.name}</td>
                <td>
                <button onClick={this._favourite.bind(null, show.show.name)} className="btn btn-sm btn-info">Favourite</button>
                </td>
                {(favourites.indexOf(show.show.name)>-1)? <td>Favourite</td>: <td>No Favourite</td>}
                <button onClick={this._unfavourite.bind(null, show.show.name)} className="btn btn-sm btn-warning">unfavourite</button>
                </tr>
                ))}
              </tbody>
          </table>

        </div>
      )
    } else {
      return (
        <div>

          <table className="table table-hover">
            <thead>

            </thead>
            <tbody>
              <tr><td></td></tr>
            </tbody>
          </table>

        </div>
      )
    }

  }
}
