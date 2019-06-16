import request from 'superagent'
import { push } from 'react-router-redux'

import { store } from '../Store'
import { resetCounter } from './Count_action'


export const signinUserDatum = (email, password) => {
  return (dispatch) => {   ///ここ復習
    new Promise((resolve) => {
      request
        .post('/api/user')
        .send({email_adress: email, password: password})
        .end((err, res) => {
          if(res.body){
            alert("login success");
            dispatch(signinSuccess(res.body))
            resolve('change path')
          }else{
            dispatch(signinFailure())
            resolve('failed sign in')
          }
          console.log('response', res.body, err);
        })
    }).then((msg) => {
      console.log(msg)
      store.dispatch(push('/counter'))
    })
  }
}

export const emailChange = (email) => {
  return {
    type: 'EMAIL_CHANGE',
    email: email
  }
}

export const passwordChange = (password) => {
  return {
    type: 'PASSWORD_CHANGE',
    password: password
  }
}

export const logout = () => {
  return (dispatch) => {
    new Promise((resolve) => {
      dispatch(sendLogout())
      dispatch(resetCounter())
      resolve()
    }).then(() => {
      store.dispatch(push('/signin'))
    })
  }
}

const signinSuccess = (body) => {
  return Object.assign(
    body,
    {
      type: 'IS_AUTHENTICATED_CHANGE',
      isAuthenticated: true
    }
  )
}

const signinFailure = () => {
  return {
    type: 'IS_AUTHENTICATED_CHANGE',
    isAuthenticted: false
  }
}

const sendLogout = () => {
  return {type: 'LOGOUT'}
  // return {
  //   type:  'IS_AUTHENTICATED_CHANGE',
  //   email: null,
  //   password: null,
  //   name: null,
  //   isAuthenticated: false
  // }
}
