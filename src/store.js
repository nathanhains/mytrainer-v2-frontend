import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import userForm from './reducers/userForm'
import myWorkouts from './reducers/myWorkouts'
import exercises from './reducers/exercises'
import thunk from 'redux-thunk'
import workoutForm from './reducers/workoutForm'
import postSubmission from './reducers/postSubmission'
import loading from './reducers/loading'
import friends from './reducers/friends'

//users: users 
const reducer = combineReducers({
    currentUser,
    loginForm,
    userForm,
    workoutForm,
    myWorkouts,
    postSubmission,
    exercises,
    loading,
    users,
    friends
  })
  
// how to use middleware

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store