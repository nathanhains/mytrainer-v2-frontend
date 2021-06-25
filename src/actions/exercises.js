export const setExercises = (exercises) => {
    console.log(exercises)
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
                console.log(response.data)
                dispatch(setExercises(response.data))
            }
        })
        .catch(console.log)
    }
}