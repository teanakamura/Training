import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'
import Style from '../App.css'

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      calculationType: true,
      history: new Array(),    //history: new Map(),
      isModalShown: false
    };
    this.calculation = this.calculation.bind(this);
    this.switchCalculation = this.switchCalculation.bind(this);
  }
  calculation(){
    console.log("calculation")
    var date = new Date;
    if (this.state.calculationType){
      this.setState({count: this.state.count + 1});
      this.state.history.push([date, "add"]);   //this.state.history.set(date, "add");
    }else{
      this.setState({count: this.state.count - 1});
      this.state.history.push([date, "reduce"]);   //this.state.history.set(date, "reduce");
    }
    this.setState({history: this.state.history});
  }
  switchCalculation(){
    console.log("switchCalculation")
    this.setState({calculationType: !this.state.calculationType});
  }
  render(){
    // var history = [];
    // var i = 0;
    // for (var [date, calc] of this.state.history.entries()){
    //   history.push(<li key={i}>
    //     {date.getFullYear().toString()}年
    //     {date.getMonth().toString()}月
    //     {date.getDate().toString()}日
    //     {date.getHours().toString()}時
    //     {date.getMinutes().toString()}分
    //     {date.getSeconds().toString()}秒
    //     に{calc}した
    //   </li>);
    //   i += 1;
    // }
    return(
    <div>
      name: {this.props.loginName}<br />
      count: {this.state.count}<br />
      <button onClick={this.calculation} class="count_box">{this.state.calculationType ? "Add" : "Reduce"}</button><br />
      <button onClick={this.switchCalculation}>{this.state.calculationType ? "change to reduce" : "change to add"} </button><br />
      <button onClick={() => { this.setState({ isModalShown: true }) }}>show modal</button><br />
      {this.state.isModalShown &&
        <div class="modal_wrapper" onClick={() => { this.setState({ isModalShown: false }) }}>
          <div class="modal_box">
            <div class="history">
              履歴一覧<br />
              {/*<ul>{history}</ul>*/}
              {this.state.history.map((value, i) => {
                const date = value[0];
                const calc = value[1];
                return(<li key={i}>
                  {date.getFullYear().toString()}年
                  {date.getMonth().toString()}月
                  {date.getDate().toString()}日
                  {date.getHours().toString()}時
                  {date.getMinutes().toString()}分
                  {date.getSeconds().toString()}秒
                  に{calc}した
                </li>);
              })}
            </div>
          </div>
        </div>
      }
      <modal />
      <button onClick={() => this.props.changeFlag(null)}>logout</button>
    </div>
  )};
}
