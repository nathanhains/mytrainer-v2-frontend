import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Loading from './components/Loading'
import WorkoutForm from './components/WorkoutForm'
import MyWorkouts from './components/MyWorkouts'
import NavBar from './components/NavBar'
import {getCurrentUser} from './actions/currentUser'
import {showLoader} from './actions/loading'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import PostSubmission from './components/PostSubmission'

class App extends React.Component {

  componentDidMount() {

    const token = localStorage.getItem("token")
    if(token){
      this.props.showLoader()
      this.props.getCurrentUser()
    }
  }

  render(){
    const {loggedIn} = this.props


    return (
      <Router>
        <div className="App">
          {loggedIn ? <NavBar/> : null}
          <Loading/>
          <PostSubmission/>
            <Switch>
              <Route exact path='/' render={()=> loggedIn ? <Redirect to="/home"/> : <Welcome/>}/>
              <Route exact path='/home' component={()=> loggedIn ? <Home/> : <Redirect to="/"/>}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/workouts/new' render={() => <WorkoutForm/>}/>
              <Route exact path='/workouts' component={MyWorkouts}/>
            </Switch>
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

export default connect(mapStateToProps, {getCurrentUser, showLoader})(App);
