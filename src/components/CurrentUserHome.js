import React from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"
import {connect} from 'react-redux'
import {clearUsers} from '../actions/users'

const CurrentUserHome = ({currentUser, hideLoader, clearUsers}) => {
    hideLoader()
    clearUsers()

    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
            <h2>Welcome! {currentUser.data.attributes.name} <i className="fa fa-gear settings" onClick={(e)=> e.target.className==="fa fa-gear fa-spin settings" ? e.target.className="fa fa-gear settings" : e.target.className="fa fa-gear fa-spin settings"}></i></h2>
            <img src={currentUser.data.attributes.avatar}/>
            <h4>Followers: {currentUser.data.attributes.followers.length} Following: {currentUser.data.attributes.followees.length}</h4>
            <Workouts/>
        </motion.div>
    )
}



export default connect(null, ({clearUsers}))(CurrentUserHome)