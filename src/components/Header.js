import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

const header = (props) => (
    <div className = 'header'>
        <NavLink exact activeClassName = "active" to='/'> HomePage</NavLink>
        <NavLink  activeClassName = "active" to='/users'> Users</NavLink>
        <NavLink  activeClassName = "active" to='/contacts'> Contacts</NavLink>
   
    </div>
)

export default header