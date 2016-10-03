import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage';


let _favourites = Storage.read('_favourites') || [];

class DetailStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {

        case 'FAVOURITE':
          console.log(action.payload.name);
          let newName = action.payload.name
          console.log(newName);
          _favourites.push(newName);
          console.log('DetailStore _favourites', _favourites)
          this.emit('CHANGE')
          break;
      }
    })

    this.on('CHANGE',() => {
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
    return _favourites;
  }
}

export default new DetailStore
