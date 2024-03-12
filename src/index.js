import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import VetricoCatalog, { VetricoCatalog1 } from './views/vetrico-catalog'
import News from './views/news'
import VetricoMosaic from './views/vetrico-mosaic'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={VetricoCatalog} exact path="/vetrico-catalog" />
        <Route component={VetricoCatalog1} exact path="/catalog" />
        <Route component={News} exact path="/news" />
        <Route component={VetricoMosaic} exact path="/mosaic" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
