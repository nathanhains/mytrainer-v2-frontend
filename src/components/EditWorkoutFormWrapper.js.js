import React from 'react'
import { connect } from 'react-redux'
import {updateWorkout, deleteWorkout} from '../actions/myWorkouts'
import {setEditWorkoutForm, resetWorkoutForm} from '../actions/workoutForm'
import WorkoutForm from './WorkoutForm'

class EditWorkoutFormWrapper extends React.Component{

    componentDidMount(){
        this.props.workout && this.props.setEditWorkoutForm(this.props.workout)
    }

    componentDidUpdate(prevProps){
        this.props.workout && !prevProps.workout && this.props.setEditWorkoutForm(this.props.workout)
    }

    componentWillUnmount() {
        this.props.resetWorkoutForm()
    }

    handleSubmit = (e, workoutFormData, user_id, modalRef) => {
        const {updateWorkout, workout} = this.props
        e.preventDefault()
        updateWorkout({
            ...workoutFormData,
            workout_id: workout.id,
            user_id
        })
        modalRef.current.close()
    }
    render() {
    return <>
    <WorkoutForm handleSubmit={this.handleSubmit} display="Edit"/>
    <button onClick={() => {
        this.props.closeModal()
        setTimeout(() => {
            this.props.deleteWorkout(this.props.workout)
          }, 200);
        }}>Delete</button>
    </>
}}

export default connect(null, {updateWorkout, setEditWorkoutForm, resetWorkoutForm, deleteWorkout})(EditWorkoutFormWrapper)