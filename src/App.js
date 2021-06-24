import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Profile from './components/Profile'
import NewWorkout from './components/NewWorkout'
import MyWorkouts from './components/MyWorkouts'
import NavBar from './components/NavBar'
import {getCurrentUser} from './actions/currentUser'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const {loggedIn} = this.props

    return (
      <Router>
        <div className="App">
          {loggedIn ? <NavBar/> : null}
            <Route exact path='/' render={()=> loggedIn ? <Profile/> : <Home/>}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/workouts/new' render={() => <NewWorkout/>}/>
            <Route exact path='/workouts' component={MyWorkouts}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({currentUser})=> {
  return {
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
