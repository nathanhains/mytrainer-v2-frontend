const initialState = {
    name: "",
    notes: "",
    exercises: []
}



export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_WORKOUT_FORM":
            return action.formData
        case "RESET_NEW_WORKOUT_FORM":
            return initialState
        case "SET_EDIT_WORKOUT_FORM":
            console.log("yo")
            return action.workoutFormData
        default:
            return state
    }
}