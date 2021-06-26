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

    const exercises = []
    const setGroups = []
    const workoutFormData = {
        name: workout.attributes.name,
        notes: workout.attributes.notes,
        exercises: workout.attributes.workout_exercises.data.map((e) => exercises.concat({...e.attributes.exercise.data, addedSets: {...e.attributes.set_groups.data.map(s => setGroups.concat(s.attributes))}[0]}))[0]
    }
    return {
        type: "SET_EDIT_WORKOUT_FORM",
        workoutFormData
    }
}