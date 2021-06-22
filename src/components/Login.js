import React from 'react';
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentUser'

const Login = ({loginFormData, updateLoginForm, login}) => {

    const handleInputChange = e => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={loginFormData.username}/>
            <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={loginFormData.password}/>
            <input type="submit" value="Log in"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)