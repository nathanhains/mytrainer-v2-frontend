import React from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"

const CurrentUserHome = ({currentUser, hideLoader}) => {
    hideLoader()
    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
            <h2>Welcome! {currentUser.data.attributes.name} <i className="fa fa-gear settings" onClick={(e)=> e.target.className==="fa fa-gear fa-spin settings" ? e.target.className="fa fa-gear settings" : e.target.className="fa fa-gear fa-spin settings"}></i></h2>
            <img src={currentUser.data.attributes.avatar}/>
            <Workouts/>
        </motion.div>
    )
}



export default CurrentUserHome