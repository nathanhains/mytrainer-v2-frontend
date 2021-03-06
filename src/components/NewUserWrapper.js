import React from 'react'
import { connect } from 'react-redux'
import {signup} from '../actions/currentUser'
import {showLoader} from '../actions/loading'

import User from './User'

const NewUserWrapper = ({signup, showLoader, history, currentUser}) => {
    
    const handleSubmit = (e, userFormData) => {
        e.preventDefault()
        showLoader()
        console.log(userFormData)
        signup(userFormData, history)
    }

    return <User handleSubmit={handleSubmit} display="Sign up"/> 

}

export default connect(null, {signup, showLoader})(NewUserWrapper)