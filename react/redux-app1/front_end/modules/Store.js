import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import {signin, counter} from './Reducers'
import {createBrowserHistory} from 'history'


export const history = createBrowserHistory();

const initialState = {
  signin: {
    isAuthenticated: false
  },
  counter: {
    calcType: true,
    count: 1,
    history: new Array(),
  }
}

export const store = createStore(
  combineReducers({  //reducer
    signin,
    counter,
    router: routerReducer
  }),
  initialState,   //initialState
  applyMiddleware(thunk, routerMiddleware(history))  //middleware
);
