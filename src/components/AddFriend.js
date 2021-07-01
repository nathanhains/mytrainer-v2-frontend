import React from 'react'
import { connect } from 'react-redux';
import {addFriend} from '../actions/friends'
import '../home.css'
const AddFriend = ({currentUser, user, addFriend}) => {

    const handleClick = () => {
        addFriend(currentUser.data.id, user.id)
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


export default connect(mapStateToProps, ({addFriend}))(AddFriend);