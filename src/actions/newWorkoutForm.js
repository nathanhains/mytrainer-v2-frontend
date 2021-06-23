export const updateNewWorkoutForm = (formData) => {
    return {
        type: "UPDATE_NEW_WORKOUT_FORM",
        formData
    }
}

export const resetNewWorkoutForm = () => {
    return {
        type: "RESET_NEW_WORKOUT_FORM"
    }
}