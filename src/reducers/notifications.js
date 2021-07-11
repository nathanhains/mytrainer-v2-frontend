const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATIONS":
            console.log(action)
            return action.myNotifications
        case "SET_READ":
            return state.map((n) => {
                return {...n, attributes: {...n.attributes, is_unread: false}}
            })
        case "CLEAR_NOTIFICATIONS":
            return initialState
        default:
            return state
    }
}