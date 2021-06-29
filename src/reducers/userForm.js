const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: ""
}



export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        case "SET_EDIT_USER_FORM":
            return action.userFormData
        default:
            return state
    }
}