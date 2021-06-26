export const setExercises = (exercises) => {
    return {
        type: "SET_EXERCISES",
        exercises
    }
}

export const getExercises = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/exercises", {
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
                dispatch(setExercises(response.data))
            }
        })
        .catch(console.log)
    }
}