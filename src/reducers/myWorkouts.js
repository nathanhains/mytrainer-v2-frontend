const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        
        case "SET_MY_WORKOUTS":
            return action.workouts.sort((a,b) => b.id - a.id)
        case "CLEAR_MY_WORKOUTS":
            return []
        case "ADD_WORKOUT":
            console.log(action.workout)
            return state.concat(action.workout).sort((a,b) => b.id - a.id)
        case "UPDATE_WORKOUT":
            return state.map(workout => workout.id === action.workout.id ? action.workout : workout)
        case "DELETE_WORKOUT":
            return state.filter(workout => workout.id !== action.workout.id)
        default:
            return state
    }
}