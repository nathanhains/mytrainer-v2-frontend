import React from 'react'
import { connect } from 'react-redux';
import {addFriend} from '../actions/friends'
import '../home.css'
import {createNotification} from '../actions/notifications'

const AddFriend = ({currentUser, user, addFriend, createNotification}) => {

    const handleClick = () => {
        addFriend(currentUser.data.id, user.id)
        createNotification({
            recipient_id: user.id,
            sender_id: currentUser.data.id,
            activity_type: "followed you",
            is_unread: true
        })
    }

   return (
       <div>
           <button className="animate" onClick={handleClick}><span>Follow</span></button>
       </div>
   )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}


export default connect(mapStateToProps, ({addFriend, createNotification}))(AddFriend);