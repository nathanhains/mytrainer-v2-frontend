import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import thunk from 'redux-thunk'

//users: users 
const reducer = combineReducers({
    users,
    currentUser,
    loginForm
  })
  
// how to use middleware

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store