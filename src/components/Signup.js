import React from 'react';
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'
import {signup} from '../actions/currentUser'

const Signup = ({signupFormData, updateSignupForm, signup, history}) => {

    const handleInputChange = e => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" onChange={handleInputChange} value={signupFormData.name}/>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={signupFormData.username}/>
            <input type="text" placeholder="email" name="email" onChange={handleInputChange} value={signupFormData.email}/>
            <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={signupFormData.password}/>
            <input type="password" placeholder="Confirm Password" name="password_confirmation" onChange={handleInputChange} value={signupFormData.password_confirmation}/>
            <input type="submit" value="Sign up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)