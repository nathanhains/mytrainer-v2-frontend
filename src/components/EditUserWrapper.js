// import React from 'react'
// import { connect } from 'react-redux'
// import {signup} from '../actions/currentUser'
// import {setEditUserForm, resetUserForm} from '../actions/UserForm'
// import {showLoader} from '../actions/loading'

// import User from './User'

// const EditUserWrapper = ({signup, showLoader, history, setEditUserForm, resetUserForm}) => {
    
//     const handleSubmit = (e, userFormData) => {
//         e.preventDefault()
//         showLoader()
//         signup(userFormData, history)
//     }

//     return <User handleSubmit={handleSubmit} display="Sign up"/>
// }

// export default connect(null, {signup, showLoader, setEditUserForm, resetUserForm})(EditUserWrapper)

import React from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../actions/currentUser'
import {setEditUserForm, resetUserForm} from '../actions/userForm'
import User from './User'

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

    handleSubmit = (e, userFormData) => {
        const {updateUser} = this.props
        e.preventDefault()
        updateUser({
            ...userFormData,
            userId: this.props.user.data.id
        })
    }

    render() {
    return <>
    <User handleSubmit={this.handleSubmit} hidePassword={true} display="Save"/>
    </>
}}

export default connect(null, {updateUser, setEditUserForm, resetUserForm})(EditUserFormWrapper)