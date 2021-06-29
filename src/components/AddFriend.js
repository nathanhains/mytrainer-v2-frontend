import React from 'react'
import { connect } from 'react-redux';
import {addFriend} from '../actions/friends'

const AddFriend = ({currentUser, user, addFriend}) => {

    const handleClick = () => {
        addFriend(currentUser.data.id, user.id)
    }

   return (
       <div>
           <button onClick={handleClick}>Follow</button>
       </div>
   )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}


export default connect(mapStateToProps, ({addFriend}))(AddFriend);