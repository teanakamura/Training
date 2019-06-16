export const signin = (state, action) => {
  //console.log('state', state)
  //console.log('action', action)
  switch(action.type){
    case 'IS_AUTHENTICATED_CHANGE':
      delete action.type;
      return Object.assign(state, action)
    case 'EMAIL_CHANGE':
      return Object.assign(state, {email: action.email})
    case 'PASSWORD_CHANGE':
      return Object.assign(state, {password: action.password})
    case 'LOGOUT':
      return {isAuthenticated: false}
    default:
      return Object.assign({}, state)   // storeを作るときに呼ばれるが、stateはundefinedなのでreturn stateだとerrorとなる。
  }                                                      //こうすると stateがundefinedのときは{}を返すようになる。
}

export const counter = (state, action) => {
  //console.log('state', state)
  //console.log('action', action)
  switch(action.type){
    case 'ADD_COUNTER':
      return Object.assign(state, {count: state.count + 1})
    case 'REDUCE_COUNTER':
      return Object.assign(state, {count: state.count - 1})
    case 'RESET_COUNTER':
      return {calcType: true, count: 1, history: new Array()}
    case 'SWITCH_CALCULATION_TYPE':
      return Object.assign(state, {calcType: !state.calcType})
    case 'ADD_HISTORY':
      return Object.assign(state, {history: state.history.concat([action.history])})
      //Array.push()の返り値は要素数なのでここではconcatを使って二次元配列を連結した。
    default:
      return Object.assign({}, state)
  }
}
