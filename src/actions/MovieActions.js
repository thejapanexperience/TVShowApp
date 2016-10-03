import API from '../API'
import AppDispatcher from '../AppDispatcher'


const MovieActions = {
  searchTitle(query) {
    API.searchTitle(query);
  },

  getDetail(id) {
    API.getDetail(id);
  },

  favourite(name) {
    console.log('MovieActions name; ',name)
    AppDispatcher.dispatch({
      type: 'FAVOURITE',
      payload: { name }
    })
  },
}



export default MovieActions
