import React from 'react'
import WorkoutCard from './WorkoutCard'
import {connect} from 'react-redux'

const MyWorkouts = ({myWorkouts}) => {
    const workouts = myWorkouts.map((w, i )=> <WorkoutCard workout={w} i={i} key={i}/>)
    return (
        workouts.length>0 ? <ul>{workouts}</ul> : null
    )
}

const mapStateToProps = ({myWorkouts}) => {
    return {
        myWorkouts
    }
}

export default connect(mapStateToProps)(MyWorkouts)