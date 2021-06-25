import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
// import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myWorkouts from './reducers/myWorkouts'
import thunk from 'redux-thunk'
import workoutForm from './reducers/workoutForm'
import postSubmission from './reducers/postSubmission'

//users: users 
const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    workoutForm,
    myWorkouts,
    postSubmission
  })
  
// how to use middleware

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store