import React, {useContext} from 'react';
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentUser'
import {motion} from 'framer-motion'
import {showLoader} from '../actions/loading'
import '../welcome.css'
import {AccountContext} from './AccountContext'


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

    const {switchToSignup} = useContext(AccountContext);

    return (
        // <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        // <form onSubmit={handleSubmit}>
        //     <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={loginFormData.username}/>
        //     <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={loginFormData.password}/>
        //     <input type="submit" value="Log in"/>
        // </form>
        // </motion.div>
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <div className="formContainerMain">

            <form className="formContainer" onSubmit={handleSubmit}>
                <div className="marginer">
                    <input type="text" name="username" className="input" placeholder="Username" onChange={handleInputChange} value={loginFormData.username}/>
                    <input type="password" name="password" className="input" placeholder="Password" onChange={handleInputChange} value={loginFormData.password}/>
                </div>
                <a className="mutedLink"></a>
                <input className="submitButton" type="submit" value="Sign in"/>
            </form>
            
            <a className="mutedLink">Don't have an account? <a onClick={switchToSignup} className="boldLink">Sign Up</a></a>
        </div>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login, showLoader})(Login)