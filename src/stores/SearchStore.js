import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage';


let _results = Storage.read('results') || [];
let _favourites = Storage.read('favourites') || [];



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

          case 'FAVOURITE':
            console.log(action.payload.name);
            let newName = action.payload.name
            _favourites.push(newName);
            this.emit('CHANGE')
            break;

          case 'UNFAVOURITE':
            console.log('unfavourite in store');
            console.log(action.payload.name)
            console.log(_favourites)
            let toDelete = _favourites.indexOf(action.payload.name)
            console.log(toDelete)
            _favourites.splice(toDelete,1)
            this.emit('CHANGE')
            break;
      }
    })

    this.on('CHANGE',() => {
      Storage.write('results', _results)
      Storage.write('favourites', _favourites)
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
  getFavourites() {
    return _favourites;
  }
}

export default new SearchStore
