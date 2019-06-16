import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'   //削除

import { store } from '../../modules/Store'  //削除
import { logout } from '../../modules/action_creators/Auth_action'


const Header = ({name, count, logout}) => {
  return(
    <div>
      name: {name}<br />
      count: {count}<br />
      <button onClick={logout}>logout</button><br />
      <button onClick={() => store.dispatch(push('/history'))}>history</button>
    </div>
  )
}

const mapStateToProps = (state) =>  {
  return{
    name: state.signin.name,
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)
export default connectedHeader
