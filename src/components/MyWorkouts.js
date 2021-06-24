import React from 'react'
import WorkoutCard from './WorkoutCard'
import {connect} from 'react-redux'

const MyWorkouts = ({myWorkouts}) => {
    const workouts = myWorkouts.map(w => <WorkoutCard workout={w} key={w.id}/>)
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