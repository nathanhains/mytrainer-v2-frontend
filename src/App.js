import React from 'react'
import Login from './components/Login'
import {getCurrentUser} from './actions/currentUser'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);
