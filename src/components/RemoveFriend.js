import React from 'react'
import { connect } from 'react-redux';
import {removeFriend, getFriends} from '../actions/friends'

const RemoveFriend = ({currentUser, user, removeFriend, getFriends, friends}) => {

    const handleClick = () => {
        getFriends(currentUser, user)
    }

   return (
       <div>
           <button className="animate" onClick={handleClick}><span>Following</span></button>
       </div>
   )
}

const mapStateToProps = ({currentUser, friends}) => {
    return {
        currentUser,
        friends
    }
}


export default connect(mapStateToProps, ({removeFriend, getFriends}))(RemoveFriend);