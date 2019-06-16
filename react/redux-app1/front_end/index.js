import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

import { history, store } from './modules/Store'
import Signin from './containers/Signin'
import Auth from './containers/Auth'


render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Auth />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
