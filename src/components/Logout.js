import React from 'react';
import {connect} from 'react-redux'
import {logout} from '../actions/currentUser'

const Logout = ({logout}) => {
    return (
        <form onSubmit={logout}>
            <button className="editFormButtonLogout" type="submit"><span>Logout</span></button>
        </form>
    )
}

export default connect(null, {logout})(Logout)