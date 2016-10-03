import React, { Component } from 'react'
import MovieActions from '../actions/MovieActions'
import DetailStore from '../stores/DetailStore'


export default class DetailPage extends Component {
  constructor() {
    super();
    
    this.state = {
      details: DetailStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    let { id } = this.props.params;
    MovieActions.getDetail(id);
    DetailStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    DetailStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      details: DetailStore.get()
    })
  }

  render() {

    let { details } = this.state;
    console.log('DetailPage details, ',details)

    return ( 
      <div>
      
        <table className="table table-hover">
          <thead>
            
          </thead>
          <tbody>
            <tr key={details.imdbID}>
              <td>{details.Title}</td>
              <td>{details.Actors}</td>
              <td>{details.Director}</td>
              <td>{details.Plot}</td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

