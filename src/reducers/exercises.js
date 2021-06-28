const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "SET_EXERCISES":
            return action.exercises
        case "CLEAR_EXERCISES":
            return initialState
        default:
            return state
    }
}