import React from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../actions/currentUser'
import {setEditUserForm, resetUserForm, updateUserForm} from '../actions/userForm'
import User from './User'
import {motion} from 'framer-motion'
import Logout from './Logout'
import '../modal.css'

class EditUserFormWrapper extends React.Component{


    componentDidMount(){
        this.props.user && this.props.setEditUserForm(this.props.user)
    }

    componentDidUpdate(prevProps){
        this.props.user && !prevProps.user && this.props.setEditUsertForm(this.props.user)
    }

    componentWillUnmount() {
        this.props.resetUserForm()
    }


    handleInputChange = e => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...this.props.userFormData,
            [name]: value
        }
        this.props.updateUserForm(updatedFormInfo)
    }


    handleImageUpload = e => {
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2){
                this.props.updateUserForm({...this.props.userFormData, avatar: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


    handleSubmit = (e) => {
        const {updateUser} = this.props
        e.preventDefault()
        updateUser({
            ...this.props.userFormData,
            userId: this.props.user.data.id
        })
    }
    //
    render() {
    return <>
        <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <div className="editFormContainerMain">
        <h1 className="formDisplayName"><i className="fa fa-gear fa-spin settings"></i></h1>
            <form className="formContainer" onSubmit={this.handleSubmit}>
                <div className="marginer">
                    <span className="formDisplayName">Name</span><input type="text" className="input" placeholder="Name" name="name" onChange={(e) => this.handleInputChange(e)} value={this.props.userFormData.name}/>
                    <span className="formDisplayName">Username</span><input type="text" className="input" placeholder="Username" name="username" onChange={this.handleInputChange} value={this.props.userFormData.username}/>
                    <span className="formDisplayName">Email</span><input type="text" className="input" placeholder="Email" name="email" onChange={this.handleInputChange} value={this.props.userFormData.email}/>
                    <label className= "input" for="avatar">
                         <img className="avatar" src={this.props.userFormData.avatar}/>
                    </label>
                    <input type={"file"} className="image-upload" id="avatar" name="avatar" onChange={this.handleImageUpload}/> 
                </div>
                    <input className="editFormButtonSubmit" type="submit" value="Save"/>
            </form>
            <Logout />
        </div>
        </motion.div>
    </>
}}

const mapStateToProps = state => {
    return {
        userFormData: state.userForm,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {updateUser, setEditUserForm, resetUserForm, updateUserForm})(EditUserFormWrapper)



