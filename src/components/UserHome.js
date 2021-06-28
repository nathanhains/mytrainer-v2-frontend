import React from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"

const UserHome = ({user, hideLoader}) => {
    hideLoader()
    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
            <h2>{user.attributes.name}</h2>
            <img src={user.attributes.avatar}/>
            <Workouts/>
        </motion.div>
    )
}



export default UserHome