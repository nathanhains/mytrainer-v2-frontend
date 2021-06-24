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

export const createWorkout = workoutData => {
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
        .then(console.log)
    }
}