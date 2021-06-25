import {resetWorkoutForm} from './workoutForm'
import {successsfulPost, resetPost} from './postSubmission'

export const setMyWorkouts = workouts => {
    return {
        type: "SET_MY_WORKOUTS",
        workouts
    }
}

export const clearWorkouts = () => {
    return {
        type: "CLEAR_MY_WORKOUTS"
    }
}

export const addWorkout = workout => {
    return {
        type: "ADD_WORKOUT",
        workout
    }
}

export const deleteWorkoutSuccess = workout => {
    return {
        type: "DELETE_WORKOUT",
        workout
    }
}

export const updateWorkoutSuccess = workout => {
    return {
        type: "UPDATE_WORKOUT",
        workout
    }
}


export const getMyWorkouts = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/workouts", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            }else {
                console.log(response.data)
                dispatch(setMyWorkouts(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createWorkout = (workoutData) => {
    return dispatch => { 
        return fetch("http://localhost:3000/api/v1/workouts", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({workout: workoutData})
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            }else{
                dispatch(addWorkout(resp.data))
                dispatch(resetWorkoutForm())
                dispatch(successsfulPost())

                setTimeout(() => {
                    dispatch(resetPost())
                  }, 2000);
            }
        })
        .catch(console.log)

    }
}

export const updateWorkout = (workoutData) => {
    return dispatch => { 
        return fetch(`http://localhost:3000/api/v1/workouts/${workoutData.workout_id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({workout: workoutData})
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            }else{
                dispatch(updateWorkoutSuccess(resp.data))
                dispatch(resetWorkoutForm())
            }
        })
        .catch(console.log)

    }
}

export const deleteWorkout = (workoutData) => {
    return dispatch => { 
        return fetch(`http://localhost:3000/api/v1/workouts/${workoutData.id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(dispatch(deleteWorkoutSuccess(workoutData)) && dispatch(resetWorkoutForm()))

    }
}

