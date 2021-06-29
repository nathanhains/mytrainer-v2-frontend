import {setFollowing} from './currentUser'
import {setFollower} from './users'

export const addFriend = (currentUserId, userId) => {
    
    const friendData = {
        followee_id: userId,
        follower_id: currentUserId
    }
    console.log(friendData)
    return dispatch => { 
        const token = localStorage.token;
        return fetch("http://localhost:3000/api/v1/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({friend: friendData})
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            }else{
                dispatch(setFollowing(resp.data.attributes.followee))
                dispatch(setFollower(resp.data.attributes.follower, resp.data.attributes.followee))
            }
        })
        .catch(console.log)

    }
}