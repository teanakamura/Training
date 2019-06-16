import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Counter from './counter/Counter'
import Signin from './Signin'
import Style from './App.css'

export default class Auth extends React.Component {
  constructor(props){
    super(props);
    this.state = {loginName: null};
    this.changeFlag = this.changeFlag.bind(this);
  }
  changeFlag(flag){
    this.setState({loginName: flag}); //!this.state.loginName
    console.log(this.state.loginName);  //setStateの反映遅い?
  }
  render(){
    return(
      <div>{this.state.loginName ?  <Counter changeFlag={this.changeFlag} loginName={this.state.loginName}/> : <Signin changeFlag={this.changeFlag} />}</div>
    );
  }
}
