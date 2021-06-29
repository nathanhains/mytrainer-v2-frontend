export default (state = [], action) => {
    switch(action.type){
        case "SET_USERS":
            return action.users
        case "CLEAR_USERS":
            return []
        case "SET_FOLLOWER":
            return {...state, data: state.data.map(u => parseInt(u.id) === action.user.id ? {...u, attributes: {...u.attributes, followers: u.attributes.followers.concat(action.friend)}} : u)}
        case "REMOVE_FOLLOWER": 
            return {...state, data: state.data.map(u => parseInt(u.id) === action.user.id ? {...u, attributes: {...u.attributes, followers: u.attributes.followers.filter((fr => fr.id != action.friend.id))}} : u)}
        default:
            return state
    }
}