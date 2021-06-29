import React from 'react';
import {connect} from 'react-redux'
import {updateUserForm} from '../actions/userForm'
import {motion} from 'framer-motion'
import {setEditUserForm} from '../actions/userForm'

const User = ({userFormData, updateUserForm, handleSubmit, display, hidePassword}) => {

    const handleInputChange = e => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...userFormData,
            [name]: value
        }
        updateUserForm(updatedFormInfo)
    }


    const handleImageUpload = e => {
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2){
                updateUserForm({...userFormData, avatar: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <form onSubmit={(e) => handleSubmit(e, userFormData)}>
            <input type="text" placeholder="Name" name="name" onChange={handleInputChange} value={userFormData.name}/>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username}/>
            <input type="text" placeholder="email" name="email" onChange={handleInputChange} value={userFormData.email}/>
            <input type={hidePassword ? "hidden" :"password"} placeholder="Password" name="password" onChange={handleInputChange} value={userFormData.password}/>
            <input type={hidePassword ? "hidden" :"password"} placeholder="Confirm Password" name="password_confirmation" onChange={handleInputChange} value={userFormData.password_confirmation}/>
            <input type="file" name="avatar" onChange={handleImageUpload}/>
            <input type="submit" value={display}/>
        </form>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        userFormData: state.userForm,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {updateUserForm, setEditUserForm})(User)