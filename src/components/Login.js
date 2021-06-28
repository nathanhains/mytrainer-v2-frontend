import React from 'react';
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentUser'
import {motion} from 'framer-motion'
import {showLoader} from '../actions/loading'
const Login = ({loginFormData, updateLoginForm, login, history, showLoader}) => {

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
        showLoader()
        login(loginFormData, history)
    }

    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={loginFormData.username}/>
            <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={loginFormData.password}/>
            <input type="submit" value="Log in"/>
        </form>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login, showLoader})(Login)