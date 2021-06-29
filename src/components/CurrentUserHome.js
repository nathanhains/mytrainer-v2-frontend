import React, { useRef } from 'react'
import Workouts from './Workouts'
import "../home.css"
import {motion} from "framer-motion"
import {connect} from 'react-redux'
import {clearUsers} from '../actions/users'
import Modal from './Modal'
import EditUserWrapper from './EditUserWrapper'

const CurrentUserHome = ({currentUser, hideLoader, clearUsers}) => {
    hideLoader()
    clearUsers()
    const showRef = useRef()
    const spinner = useRef()
    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }} >
            <h2>Welcome! {currentUser.data.attributes.name} <i ref={spinner} className="fa fa-gear settings" onClick={(e)=> {
                    e.target.className="fa fa-gear fa-spin settings" 
                    showRef.current.open()
                }}></i></h2>
            <Modal unSpin={()=> spinner.current.className="fa fa-gear settings"} ref={showRef}>
                <h1>Settings</h1>
                <EditUserWrapper user={currentUser}/>
                <button>Log out</button>
            </Modal>
            <img src={currentUser.data.attributes.avatar}/>
            <h4>Followers: {currentUser.data.attributes.followers.length} Following: {currentUser.data.attributes.followees.length}</h4>
            <Workouts/>
        </motion.div>
    )
}



export default connect(null, ({clearUsers}))(CurrentUserHome)