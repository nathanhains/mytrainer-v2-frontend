import {setFollowing} from './currentUser'
import {setFollower} from './users'

import {removeFollowing} from './currentUser'
import {removeFollower} from './users'

//do this so I can get the id of the friendship when somebody removes someone
export const getFriends = (currentUser, user) => {
    return dispatch => {
        const token = localStorage.token;
        return fetch("http://localhost:3000/api/v1/friends", {
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
                const friendship = response.data.filter((f) => f.attributes.followee.id === parseInt(user.id) && f.attributes.follower.id === parseInt(currentUser.data.id))[0]
                dispatch(removeFriend(friendship))
            }
        })
        .catch(console.log)
    }
}

export const addFriend = (currentUserId, userId) => {
    
    const friendData = {
        followee_id: userId,
        follower_id: currentUserId
    }
  
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

export const removeFriend = (friendship) => {
    return dispatch => { 
        const token = localStorage.token;
        return fetch(`http://localhost:3000/api/v1/friends/${friendship.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
        .then(dispatch(removeFollowing(friendship.attributes.followee)) && dispatch(removeFollower(friendship.attributes.follower, friendship.attributes.followee)))
           
                // dispatch(setFollowing(resp.data.attributes.followee))
                // dispatch(setFollower(resp.data.attributes.follower, resp.data.attributes.followee))
    }

}