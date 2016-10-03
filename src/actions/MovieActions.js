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
    AppDispatcher.dispatch({
      type: 'FAVOURITE',
      payload: { name }
    })
  },

  unfavourite(name) {
    AppDispatcher.dispatch({
      type: 'UNFAVOURITE',
      payload: { name }
    })
  },
}



export default MovieActions
