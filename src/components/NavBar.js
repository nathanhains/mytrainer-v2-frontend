import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'
import NewWorkout from './NewWorkout'
import '../navbar.css'

const NavBar = ({currentUser}) => {
    return (
    <div className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NewWorkout />
        <Logout/>
    </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar);