import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Style from '../App.css'


const CounterHistory = ({counterHistory}) => {
  return(
    <div class="history">
      <Link to='/counter'>TOP</Link><br />
      履歴一覧<br />
      <ul>
        {counterHistory.map((value, i) => {
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
      </ul>
    </div>
  )
}

const connectedCounterHistory = connect((state) => {return {counterHistory: state.counter.history}})(CounterHistory)
export default connectedCounterHistory
