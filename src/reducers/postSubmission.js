export default (state = null, action) => {
    switch(action.type){
        case "SUCCESSFUL_POST":
            return true
        case "RESET_STATE":
            return null
        default:
            return state
    }
}