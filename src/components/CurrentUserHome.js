import React, { useRef } from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"
import {connect} from 'react-redux'
import {clearUsers} from '../actions/users'
import Logout from './Logout'
import Modal from './Modal'
import EditUserWrapper from './EditUserWrapper'

const CurrentUserHome = ({currentUser, hideLoader, clearUsers, myWorkouts}) => {
    hideLoader()
    clearUsers()
    const showRef = useRef()
    const spinner = useRef()
    return (
        <div className="main">
        <div className="whole">
                <div className="top">
                    <h1></h1>
                </div>
                
                <div className="bottom">
                    <div className="profile-main">
                    <div className="profile-container">
                        <img className="profile" src={currentUser.data.attributes.avatar}/>
                    </div>
                    <div className="profile-headings">
                    <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
                        <h2 className="section">{currentUser.data.attributes.name} <i ref={spinner} className="fa fa-gear settings" onClick={(e)=> {
                            e.target.className="fa fa-gear fa-spin settings" 
                            showRef.current.open()
                            }}></i><span className="section grayed">@{currentUser.data.attributes.username}</span></h2>
              
                        <Modal unSpin={()=> spinner.current.className="fa fa-gear settings"} ref={showRef}>
                            <h1>Settings</h1>
                            <EditUserWrapper user={currentUser}/>
                            <Logout/>
                        </Modal>
                    </motion.div>
                </div>
                    <motion.div className="ratios" initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
                        <h4 className= "align"><span className="section number">{myWorkouts.length}<span className="section grayed">Workouts</span></span></h4>
                        <h4 className= "align"><span className="section number">{currentUser.data.attributes.followers.length}<span className="section grayed">Followers</span></span></h4>
                        <h4 className="align"><span className="section number">{currentUser.data.attributes.followees.length}<span  className="section grayed">Following</span></span></h4>
                    </motion.div>

                    
                    </div>
                            
                    <div className="workouts">
                        <Workouts/>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}



export default connect(null, ({clearUsers}))(CurrentUserHome)