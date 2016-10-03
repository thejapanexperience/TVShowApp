import React, { Component } from 'react'
import SearchStore from '../stores/SearchStore'
import MovieActions from '../actions/MovieActions'


export default class FavouritesPage extends Component {
  constructor() {
    super();

    this.state = {
      favourites: SearchStore.getFavourites()
    }

    this._onChange = this._onChange.bind(this);
    this._unfavourite = this._unfavourite.bind(this);
  }

  componentWillMount () {
    SearchStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      favourites: SearchStore.getFavourites()
    })
  }

  _unfavourite(name) {
    MovieActions.unfavourite(name)
  }

  render() {

    let { favourites } = this.state;
    console.log(favourites)

    return (
      <table>
      <tbody>
      {favourites.map((favourite) =>
        (
        <tr key={favourite}>
        <td>{favourite}</td>
        <td>
        </td>
        <td><button onClick={this._unfavourite.bind(null, favourite)} className="btn btn-sm btn-warning">unfavourite</button></td>
        </tr>
        ))}
      </tbody>
      </table>
    )
  }
}
