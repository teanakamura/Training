export const calculation = (calcType) => {
  return (dispatch) => {
    if (calcType){
      dispatch(addCounter())
    }else{
      dispatch(reduceCounter())
    }
    dispatch(addHistory(calcType ? 'add' : 'reduce'))
  }
}

export const switchCalculation = () => {
  return {type: 'SWITCH_CALCULATION_TYPE'}
}

export const resetCounter = () => {
  return {type: 'RESET_COUNTER'}
}

const addCounter = () => {
  return {type: 'ADD_COUNTER'}
}

const reduceCounter = () => {
  return {type: 'REDUCE_COUNTER'}
}

const addHistory = (calcType) => {
  return {
    type: 'ADD_HISTORY',
    history: [new Date, calcType]
  }
}
