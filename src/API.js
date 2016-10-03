import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  searchTitle(query) {
    get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => {
        let { data } = res;

        console.log('data: ', data)
        ServerActions.receiveSearchResults(data);
      })
      .catch(err => {
        console.log('error')
      })
  },

  // getDetail(id) {
  //   get(`http://www.omdbapi.com/?i=${id}`)
  //     .then(res => {
  //       let { data } = res;

  //       console.log('data: ', data)
  //       ServerActions.receiveDetail(data);
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }
}

export default API;
