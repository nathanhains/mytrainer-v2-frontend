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
        // <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
        //     <h2>{user.attributes.name} {
        //         currentUser.data.attributes.followees.filter((f) => f.id === parseInt(userId)).length > 0 ? <RemoveFriend user={user}/> : <AddFriend user={user}/>
        //     }</h2>
        //     <img src={user.attributes.avatar}/>
        //     <h4>Followers: {user.attributes.followers.length} Following: {user.attributes.followees.length}</h4>
        //     <Workouts userWorkouts = {user.attributes.workouts.data} userId={userId}/>
        // </motion.div>

        <div className="main">
        <div className="whole">
                <div className="top">
                    <h1></h1>
                </div>
                
                <div className="bottom">
                    <div className="profile-main">
                    <div className="profile-container">
                        <img className="profile" src={user.attributes.avatar}/>
                    </div>
                    <div className="profile-headings">
                    <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
                        <h2 className="section">{user.attributes.name}<span className="section grayed">@{user.attributes.username}</span></h2>

                    </motion.div>
                </div>
                    <motion.div className="ratios" initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
                        <h4 className= "align"><span className="section number">{user.attributes.workouts.data.length}<span className="section grayed">Workouts</span></span></h4>
                        <h4 className= "align"><span className="section number">{user.attributes.followers.length}<span className="section grayed">Followers</span></span></h4>
                        <h4 className="align"><span className="section number">{user.attributes.followees.length}<span  className="section grayed">Following</span></span></h4>
                    </motion.div>

                        <div className="follow">
                            {currentUser.data.attributes.followees.filter((f) => f.id === parseInt(userId)).length > 0 ? <RemoveFriend user={user}/> : <AddFriend user={user}/>}
                        </div>
                    </div>
                            
                    <div className="workouts">
                        <Workouts userWorkouts = {user.attributes.workouts.data} userId={userId}/>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserHome)