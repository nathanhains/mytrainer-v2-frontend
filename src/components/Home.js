import React from 'react'
import MyWorkouts from './MyWorkouts'
import {connect} from 'react-redux'
import "../profile.css"

const Home = ({currentUser}) => {

    return(
    <div>
        <h2>Welcome! {currentUser.data.name} <button className={"button"} onClick={(e)=> e.target.className==="fa fa-gear fa-spin" ? e.target.className="fa fa-gear" : e.target.className="fa fa-gear fa-spin"}><i className="fa fa-gear"></i></button></h2>
        <MyWorkouts/>
    </div>
    )
}

const mapStateToProps = ({currentUser}) =>{
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Home)