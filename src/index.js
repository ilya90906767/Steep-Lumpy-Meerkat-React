import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Home from './views/home'
import SomeMosaic from './views/some-mosaic'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={SomeMosaic} exact path="/some-mosaic" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
