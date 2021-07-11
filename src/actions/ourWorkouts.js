export const setOurWorkouts = workouts => {
    return {
        type: "SET_OUR_WORKOUTS",
        workouts
    }
}

export const clearOurWorkouts = () => {
    return {
        type: "CLEAR_OUR_WORKOUTS"
    }
}

export const addWorkoutSuccessOur = workout => {
    return {
        type: "ADD_OUR_WORKOUT",
        workout
    }
}

export const deleteWorkoutSuccessOur = workout => {
    return {
        type: "DELETE_OUR_WORKOUT",
        workout
    }
}

export const updateWorkoutSuccessOur = workout => {
    return {
        type: "UPDATE_OUR_WORKOUT",
        workout
    }
}