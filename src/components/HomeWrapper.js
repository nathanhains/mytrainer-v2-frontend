import React from 'react'
import {connect} from 'react-redux'
import { useLocation } from "react-router-dom";
import "../home.css"
import CurrentUserHome from './CurrentUserHome';
import UserHome from './UserHome';
import {hideLoader} from '../actions/loading'

const Home = ({currentUser, users, hideLoader}) => {
    const userId = useLocation().pathname.split("/")[2]
    const user = userId ? users.data ? users.data.filter((u) => u.id === userId)[0] : null : null
    
    return user ? 
        <UserHome hideLoader={hideLoader} userId = {userId} user = {user}/>
    : currentUser && !userId ? 
        <CurrentUserHome hideLoader={hideLoader} currentUser = {currentUser}/>
    : null
}

const mapStateToProps = ({currentUser, users}) =>{
    return {
        currentUser,
        users
    }
}

export default connect(mapStateToProps, {hideLoader})(Home)