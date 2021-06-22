import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import users from './reducers/users.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users
  })
  
// how to use middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store