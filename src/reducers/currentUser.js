export default (state = null, action) => {
    switch(action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        case "SET_FOLLOWING":
            return {...state, data: {...state.data, attributes: {...state.data.attributes, followees: state.data.attributes.followees.concat(action.friend)}}}
        case "REMOVE_FOLLOWING":
            return {...state, data: {...state.data, attributes: {...state.data.attributes, followees: state.data.attributes.followees.filter((f) => f.id != action.friend.id)}}}
        default:
            return state
    }
}