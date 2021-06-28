export default (state = [], action) => {
    switch(action.type){
        case "SET_USERS":
            return action.users
        case "CLEAR_USERS":
            return []
        default:
            return state
    }
}