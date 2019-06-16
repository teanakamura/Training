import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import Header from './counter/Header'
import CounterBox from './counter/counterbox/CountBox'
import CounterHistory from './counter/History'


const Auth = ({isAuthenticated}) => {
  return(
    <div>
        {isAuthenticated ?
          (
            <div>
              <Header />
              <Switch>
                <Route path='/counter' component={CounterBox} />
                <Route path='/history' component={CounterHistory} />
              </Switch>
            </div>
          ) : (
            <Redirect to={'/signin'}/>
          )
        }
    </div>
  )
}
const connectedAuth = connect((state) => {return {isAuthenticated: state.signin.isAuthenticated}})(Auth);
export default connectedAuth



////
