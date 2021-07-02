import {resetLoginForm} from './loginForm'
import {resetUserForm} from './userForm'
import {clearWorkouts, getMyWorkouts} from './myWorkouts'
import {clearExercises} from './exercises'
import {hideLoader} from './loading'
import {getUsers, clearUsers} from './users'

// whileTap={{ scale: 0.9 }}

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
        // user: user || payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
            return fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(r=> r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                }else{
                    localStorage.setItem("token", user.jwt)
                    dispatch(setCurrentUser(user.user))
                    dispatch(getMyWorkouts())
                    dispatch(resetLoginForm())
                    dispatch(hideLoader())
                    history.push(`/home`)
                    
                }
            })
            .catch(console.log)
        }   
}

export const signup = (credentials, history) => {
    return dispatch => {
            const userInfo = {
                user: credentials
            }
            return fetch("http://localhost:3000/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            .then(r=> r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                }else{
                    localStorage.setItem("token", user.jwt)
                    dispatch(setCurrentUser(user.user))
                    dispatch(resetUserForm())
                    dispatch(hideLoader())
                    history.push('/home')
                }
            })
            .catch(console.log)
        }   
}

export const getCurrentUser = () => {
    return dispatch => {
            const token = localStorage.token;
            return fetch("http://localhost:3000/api/v1/get_current_user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(r=> r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                }else{
                    dispatch(setCurrentUser(user.user))
                    dispatch(getMyWorkouts())
                    dispatch(getUsers())
                }
            })
            .catch(console.log)
        }
    
}

export const updateUser = (userData) => {
    const { userId, ...noUserId } = userData
    const userInfo = {
        user: noUserId
    }
    return dispatch => { 
        const token = localStorage.token;
        return fetch(`http://localhost:3000/api/v1/users/${userData.userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)

    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch(clearCurrentUser())
        dispatch(clearWorkouts())
        dispatch(clearExercises())
        dispatch(clearUsers())
    }
}

export const setFollowing = (friend) => {
    return {
        type: "SET_FOLLOWING",
        friend
    }
}

export const removeFollowing = (friend) => {
    return {
        type: "REMOVE_FOLLOWING",
        friend
    }
}
