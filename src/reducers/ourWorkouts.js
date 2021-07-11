const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_OUR_WORKOUTS":
            return action.workouts.sort((a,b) => b.id - a.id)
        case "CLEAR_OUR_WORKOUTS":
            return initialState
        case "ADD_OUR_WORKOUT":
            return state.concat(action.workout).sort((a,b) => b.id - a.id)
        case "UPDATE_OUR_WORKOUT":
            return state.map(workout => workout.id === action.workout.id ? action.workout : workout)
        case "DELETE_OUR_WORKOUT":
            return state.filter(workout => workout.id !== action.workout.id)
        default:
        return state
    }
}