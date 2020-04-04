import React from 'react'
import Login from '../widgets/Login'
import Forms from './Forms'

const Authentication = props => {
    return (props.isLoggedIn === true)
        ? <Forms/>
        : <Login/>    
}

export default Authentication;