export const setUsers = users => {
    return {
        type: "SET_USERS",
        users
    }
}

export const clearUsers = () => {
    return {
        type: "CLEAR_USERS"
    }
}


export const getUsers = () => {
    return dispatch => {
        const token = localStorage.token;
        return fetch("http://localhost:3000/api/v1/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            }else {
                dispatch(setUsers(response))
            }
        })
        .catch(console.log)
    }
}

export const setFollower = (friend, user) => {
    return {
        type: "SET_FOLLOWER",
        friend, 
        user
    }
}

export const removeFollower = (friend, user) => {
    return {
        type: "REMOVE_FOLLOWER",
        friend, 
        user
    }
}