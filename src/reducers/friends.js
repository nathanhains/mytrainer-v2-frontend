const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "SET_FRIENDS":
            return action.friends
        case "SET_FRIEND":
            return state.concat(action.friend)
        case "CLEAR_FRIENDS":
            return initialState
        default:
            return state
    }
}