const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "SET_EXERCISES":
            return action.exercises
        default:
            return state
    }
}