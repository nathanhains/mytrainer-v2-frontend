export const addWorkout = workout => {
    return {
        type: "ADD_WORKOUT",
        workout
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