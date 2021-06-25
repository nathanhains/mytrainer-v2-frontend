export const updateWorkoutForm = (formData) => {
    return {
        type: "UPDATE_NEW_WORKOUT_FORM",
        formData
    }
}

export const resetWorkoutForm = () => {
    return {
        type: "RESET_NEW_WORKOUT_FORM"
    }
}

export const setEditWorkoutForm = workout => {
    const workoutFormData = {
        name: workout.attributes.name,
        notes: workout.attributes.notes,
    }
    return {
        type: "SET_EDIT_WORKOUT_FORM",
        workoutFormData
    }
}