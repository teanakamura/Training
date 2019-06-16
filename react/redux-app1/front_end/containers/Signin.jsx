import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from  'react-router-dom'

import { signinUserDatum, emailChange, passwordChange } from '../modules/action_creators/Auth_action'
import { store } from '../modules/Store'             //削除


const Signin = ({isAuthenticated, dispatch, history}) => {
  let email;
  let password;
  //console.log(history);      //削除
  //console.log(store.getState())    //削除
  return (
    <div>
      {isAuthenticated ?              //この分岐なくてもいい
        <Redirect to={'/counter'} /> :
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              dispatch(signinUserDatum(email.value, password.value));
              email.value = '';
              password.value = '';
              //history.push('/count')    //削除
            }}
          >
            email:
            <input
              ref={(node) => {email = node}}
              type="email"
              placeholder="input your email adress"
              name="email"
              onChange={e => {
                //e.preventDefault();
                dispatch(emailChange(email.value));
              }}
            /><br />
            password:
            <input
              ref={(node) => (password = node)}
              type="password"
              placeholder="input password"
              name="password"
              onChange={e => {
                //e.preventDefault();
                dispatch(passwordChange(password.value));
              }}
            /><br />
            <input type="submit" value="sign in"/>
          </form>
        </div>
      }
    </div>
  );
}

//const connectedSigninWithRouter = withRouter(connect(state => {return {isAuthenticated: state.signin.isAuthenticated}})(Signin));
const connectedSignin = connect(state => {return {isAuthenticated: state.signin.isAuthenticated}})(Signin);
export default connectedSignin;
