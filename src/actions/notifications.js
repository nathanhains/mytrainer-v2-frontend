export const setNotifications = notifications => {
    return {
        type: "SET_NOTIFICATIONS",
        notifications
    }
}


export const getMyNotifications = () => {
    return dispatch => {
            const token = localStorage.token;
            return fetch("http://localhost:3000/api/v1/notifications", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(r=> r.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                }else{
                    dispatch(setNotifications(resp.data))
                }
            })
            .catch(console.log)
        }
    
}