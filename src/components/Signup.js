import React from 'react';
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'
import {signup} from '../actions/currentUser'
import {motion} from 'framer-motion'
import {showLoader} from '../actions/loading'

const Signup = ({signupFormData, updateSignupForm, signup, history, showLoader}) => {

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
        showLoader()
        signup(signupFormData, history)
    }

    const handleImageUpload = e => {
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2){
                updateSignupForm({...signupFormData, avatar: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" onChange={handleInputChange} value={signupFormData.name}/>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={signupFormData.username}/>
            <input type="text" placeholder="email" name="email" onChange={handleInputChange} value={signupFormData.email}/>
            <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={signupFormData.password}/>
            <input type="password" placeholder="Confirm Password" name="password_confirmation" onChange={handleInputChange} value={signupFormData.password_confirmation}/>
            <input type="file" name="avatar" onChange={handleImageUpload}/>
            <input type="submit" value="Sign up"/>
        </form>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup, showLoader})(Signup)