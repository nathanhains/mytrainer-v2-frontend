import React from 'react'
import Welcome from './components/Welcome'
import Home from './components/HomeWrapper'
import Loading from './components/Loading'
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import Notifications from './components/Notifications'
import {getCurrentUser} from './actions/currentUser'
import {showLoader} from './actions/loading'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import PostSubmission from './components/PostSubmission'
import {AnimatePresence} from "framer-motion"

class App extends React.Component {

  componentDidMount() {

    const token = localStorage.getItem("token")
    
    if(token){
      this.props.showLoader()
      this.props.getCurrentUser()
    }
  }

  render(){
    const loggedIn = !!localStorage.getItem("token") || !!this.props.currentUser

    return (
      <Router>
        <div className="App">
          {loggedIn ? <NavBar/> : null}
          <Loading/>
          <PostSubmission/>
          <AnimatePresence>
            <Switch >
              <Route exact path='/' component={()=> loggedIn ? <Redirect to="/home"/> : <Welcome/>}/>
              <Route exact path='/home' component={()=> loggedIn ? <Home/> : <Redirect to="/"/>}/>
              <Route exact path='/users/:id' component={() => loggedIn ? <Home/> : <Redirect to="/"/>}/>
              <Route exact path='/feed' component={() => loggedIn ? <Feed/> : <Redirect to="/"/>}/>
              <Route exact path='/notifications' component={() => loggedIn ? <Notifications/> : <Redirect to="/"/>}/>
            </Switch>
          </AnimatePresence>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({currentUser})=> {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser, showLoader})(App);
