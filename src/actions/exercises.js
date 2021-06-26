export const setExercises = (exercises) => {
    return {
        type: "SET_EXERCISES",
        exercises
    }
}

export const getExercises = () => {
    return dispatch => {
        const token = localStorage.token;
        return fetch("http://localhost:3000/api/v1/exercises", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
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