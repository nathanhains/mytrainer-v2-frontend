import React from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import {getCurrentUser} from './actions/currentUser'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        {this.props.currentUser ? <Logout/> : <Login/>}
      </div>
    );
  }
}

const mapStateToProps = ({currentUser})=> {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
