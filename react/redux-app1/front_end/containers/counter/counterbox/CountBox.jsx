import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { calculation, switchCalculation } from '../../../modules/action_creators/Count_action'


const CounterBox = ({calcType, calculation, switchCalculation}) => {
  return(
    <div>
      <button onClick={() => calculation(calcType)} class="count_box">{calcType ? "Add" : "Reduce"}</button><br />
      <button onClick={switchCalculation}>{calcType ? "change to reduce" : "change to add"}</button><br />
      <Link to='/history'>カウント履歴</Link>
    </div>
  )
}

const mapStateToProps = (state) =>  {
  return{
    calcType: state.counter.calcType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculation: (calcType) => dispatch(calculation(calcType)),
    switchCalculation: () => dispatch(switchCalculation())
  }
}

const connectedCounterBox = connect(mapStateToProps, mapDispatchToProps)(CounterBox)
export default connectedCounterBox
