import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import FavouritesPage from './components/FavouritesPage'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>

      <Route path='/search' component={SearchPage}/>
      <Route path='/favourites' component={FavouritesPage}/>

    </Route>

  </Router>,
  document.getElementById('root')
);
