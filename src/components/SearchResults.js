import React, { Component } from 'react'
import SearchStore from '../stores/SearchStore'
import DetailStore from '../stores/DetailStore'
import MovieActions from '../actions/MovieActions'
import { browserHistory } from 'react-router'


export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: SearchStore.get(),
      results: DetailStore.get()
    }

    this._onChange = this._onChange.bind(this);
    this._favourite = this._favourite.bind(this);
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
      favourites: DetailStore.get()
    })
  }

  _favourite(name) {
    MovieActions.favourite(name)
  }

  render() {


    let { results, favourites } = this.state;
    let strFavourites=""

    if (favourites){
      strFavourites = favourites.toString()
      console.log('strFavourites', strFavourites)
    } else {
      strFavourites = "there's no favourites"
    }
    console.log('SearchResults results : ', results)
    console.log('Favourites in search results', favourites, strFavourites)



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
                </tr>
                ))}
                <tr>
                  <td>{favourites}</td>
                </tr>
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
