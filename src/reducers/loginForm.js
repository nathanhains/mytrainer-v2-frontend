const initialState = {
    username: "",
    password: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_LOGIN_FORM":
            return action.formData
        default:
            return state
    }
}

// add a reducer - declare an initial state - export the reducer - include it in store