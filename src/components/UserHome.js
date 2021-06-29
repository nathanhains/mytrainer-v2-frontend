import React from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"
import AddFriend from './AddFriend'
import { connect } from 'react-redux'
import RemoveFriend from './RemoveFriend'

const UserHome = ({user, hideLoader, userId, currentUser}) => {
    hideLoader()
    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
            <h2>{user.attributes.name} {
                currentUser.data.attributes.followees.filter((f) => f.id === parseInt(userId)).length > 0 ? <RemoveFriend user={user}/> : <AddFriend user={user}/>
            }</h2>
            <img src={user.attributes.avatar}/>
            <h4>Followers: {user.attributes.followers.length} Following: {user.attributes.followees.length}</h4>
            <Workouts userWorkouts = {user.attributes.workouts.data} userId={userId}/>
        </motion.div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserHome)