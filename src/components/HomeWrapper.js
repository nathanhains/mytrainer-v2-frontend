import React from 'react'
import {connect} from 'react-redux'
import { useLocation } from "react-router-dom";
import "../home.css"
import CurrentUserHome from './CurrentUserHome';
import UserHome from './UserHome';
import {hideLoader} from '../actions/loading'

const Home = ({currentUser, users, hideLoader, myWorkouts}) => {
    const userId = useLocation().pathname.split("/")[2]
    const user = userId ? users.data ? users.data.filter((u) => u.id === userId)[0] : null : null
    
    return user && userId !== currentUser.data.id ? 
        <UserHome hideLoader={hideLoader} userId = {userId} user = {user}/>
    : currentUser && !userId || currentUser && userId === currentUser.data.id ? 
        <CurrentUserHome hideLoader={hideLoader} myWorkouts={myWorkouts} currentUser = {currentUser}/>
    : null
}

const mapStateToProps = ({currentUser, users, myWorkouts}) =>{
    return {
        currentUser,
        users,
        myWorkouts
    }
}

export default connect(mapStateToProps, {hideLoader})(Home)