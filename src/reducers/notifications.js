const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATIONS":
            return action.notifications
        default:
            return state
    }
}