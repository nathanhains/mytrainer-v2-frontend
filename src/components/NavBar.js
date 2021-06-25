import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'

import '../navbar.css'
import NewWorkoutFormWrapper from './NewWorkoutFormWrapper'

const NavBar = ({currentUser}) => {
    return (
    <div className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NewWorkoutFormWrapper />
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