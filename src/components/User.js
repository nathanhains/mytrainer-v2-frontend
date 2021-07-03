import React, {useContext} from 'react';
import {connect} from 'react-redux'
import {updateUserForm} from '../actions/userForm'
import {motion} from 'framer-motion'
import {setEditUserForm} from '../actions/userForm'
import {AccountContext} from './AccountContext'

const User = ({userFormData, updateUserForm, handleSubmit, display, hidePassword, currentUser}) => {

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

    
    const {switchToSignin} = useContext(AccountContext);

    return (
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <div className="formContainerMain">

            <form className="formContainer" onSubmit={(e) => handleSubmit(e, userFormData)}>
                <div className="marginer">
                    <input type="text" className="input" placeholder="Name" name="name" onChange={handleInputChange} value={userFormData.name}/>
                    <input type="text" className="input" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username}/>
                    <input type="text" className="input" placeholder="Email" name="email" onChange={handleInputChange} value={userFormData.email}/>
                    <input type={hidePassword ? "hidden" :"password"} className="input" placeholder="Password" name="password" onChange={handleInputChange} value={userFormData.password}/>
                    <input type={hidePassword ? "hidden" :"password"} className="input" placeholder="Confirm Password" name="password_confirmation" onChange={handleInputChange} value={userFormData.password_confirmation}/>
                    <input type={!hidePassword ? "hidden" : "file"} className="input" name="avatar" onChange={handleImageUpload}/> 
                </div>
                    <a className="padding"></a>
                    <input className="submitButton" type="submit" value={display}/>
            </form>
           
            
            <a className="mutedLink">Already have an account? <a onClick={switchToSignin}className="boldLink">Sign In</a></a>
        </div>
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