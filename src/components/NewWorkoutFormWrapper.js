import React from 'react'
import { connect } from 'react-redux'
import {createWorkout} from '../actions/myWorkouts'
import WorkoutForm from './WorkoutForm'

const NewWorkoutFormWrapper = ({createWorkout}) => {
    
    const handleSubmit = (e, workoutFormData, user_id, modalRef) => {
        e.preventDefault()
        createWorkout({
            ...workoutFormData,
            user_id
        })
        modalRef.current.close()
    }

    return <WorkoutForm handleSubmit={handleSubmit} display="New Workout"/>
}

export default connect(null, {createWorkout})(NewWorkoutFormWrapper)