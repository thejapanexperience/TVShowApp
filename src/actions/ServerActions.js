import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearchResults(data) {

    console.log('data in ServerActions: ', data)

    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { data }
    })
  },

  receiveDetail(data) {

    console.log('detail data in ServerActions: ', data)

    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAIL',
      payload: {data}
    })
  }

}

export default ServerActions
