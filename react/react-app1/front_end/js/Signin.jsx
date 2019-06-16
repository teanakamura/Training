import React, { Component } from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'

export default class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
    let changeFlag = this.props.changeFlag.bind(this)
    request
      .post('/api/user')
      .send({email_adress: this.state.email, password: this.state.password})
      .end((err, res) => {
        if(res.body){
          alert("login success");
          changeFlag(res.body['name'])
        }
        console.log(err);
      });
  }
  onTextAreaChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        email:
        <input
          type="email"
          placeholder="input your email adress"
          value={this.state.email}
          name="email"
          onChange={this.onTextAreaChange}/><br />
        password:
        <input
          type="password"
          placeholder="inpur password"
          value={this.state.password}
          name="password"
          onChange={this.onTextAreaChange}/>
        <div>
          <input type="submit" value="sign in"/>
        </div>
      </form>
    );
  }
}
