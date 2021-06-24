const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        
        case "SET_MY_WORKOUTS":
            return action.workouts
        case "CLEAR_MY_WORKOUTS":
            return []
        case "ADD_WORKOUT":
            return state.concat(action.workout)
        default:
            return state
    }
}