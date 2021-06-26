import {resetLoginForm} from './loginForm'
import {resetSignupForm} from './signupForm'
import {clearWorkouts, getMyWorkouts} from './myWorkouts'
import {getExercises} from './exercises'
import {hideLoader} from './loading'

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
                    dispatch(getExercises())
                    dispatch(resetLoginForm())
                    history.push(`/home`)
                }
            })
            .catch(console.log)
        }   
}

export const signup = (credentials, history) => {
    console.log("credentials are", credentials)
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
                    dispatch(resetSignupForm())
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
                    dispatch(hideLoader())
                    dispatch(setCurrentUser(user.user))
                    dispatch(getMyWorkouts())
                }
            })
            .catch(console.log)
        }
    
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearWorkouts())
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}