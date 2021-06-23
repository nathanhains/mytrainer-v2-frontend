const initialState = {
    name: "",
    notes: ""
}



export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_WORKOUT_FORM":
            return action.formData
        case "RESET_NEW_WORKOUT_FORM":
            return initialState
        default:
            return state
    }
}