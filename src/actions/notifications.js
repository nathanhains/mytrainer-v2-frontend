export const setRead = () => {
    return {
        type: "SET_READ"
    }
}

export const clearNotifications = () => {
    return {
        type: "CLEAR_NOTIFICATIONS"
    }
}

export const setMyNotifications = myNotifications => {
    return {
        type: "SET_NOTIFICATIONS",
        myNotifications
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
                    console.log(resp.data)
                    setTimeout(() => dispatch(setMyNotifications(resp.data)), 1000)
                }
            })
            .catch(console.log)
        } 
}

export const createNotification = (notificationData) => {
    return dispatch => { 
        const token = localStorage.token;
        return fetch("http://localhost:3000/api/v1/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({notification: notificationData})
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            }else{
                console.log(resp)
            }
        })
        .catch(console.log)
    }
}

export const updateNotification = notification => {
    return dispatch => { 
        const token = localStorage.token;
        return fetch(`http://localhost:3000/api/v1/notifications/${notification.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({notification: {is_unread: false}})
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            }else{
                console.log(resp)
            }
        })
        .catch(console.log)

    }
}