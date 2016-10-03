import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage';


let _results = Storage.read('results') || [];


class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _results = action.payload.data;
          console.log('SearchStore _results: ', _results)
          this.emit('CHANGE')
          break;
      }
    })

    this.on('CHANGE',() => {
      Storage.write('results', _results)
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get() {
    return _results;
  }
}

export default new SearchStore
