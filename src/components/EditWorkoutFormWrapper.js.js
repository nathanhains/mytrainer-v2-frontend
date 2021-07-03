import React from 'react'
import { connect } from 'react-redux'
import {updateWorkout, deleteWorkout} from '../actions/myWorkouts'
import {setEditWorkoutForm, resetWorkoutForm} from '../actions/workoutForm'
import Sure from './Sure'
import WorkoutForm from './WorkoutForm'
import '../modal.css'

class EditWorkoutFormWrapper extends React.Component{

    constructor(){
        super()
        this.state = {
            clicked: false
        }
    }

    componentDidMount(){
        this.props.workout && this.props.setEditWorkoutForm(this.props.workout)
    }

    componentDidUpdate(prevProps){
        this.props.workout && !prevProps.workout && this.props.setEditWorkoutForm(this.props.workout)
    }

    componentWillUnmount() {
        this.props.resetWorkoutForm() && this.setState({clicked: false})
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
    <WorkoutForm handleSubmit={this.handleSubmit} />
    <button onClick={() => this.setState({clicked: true})}>Delete</button>
    {this.state.clicked ? <Sure cancel={()=> this.setState({clicked: false})} delete={() => {
        this.props.closeModal()
        setTimeout(() => {
            this.props.deleteWorkout(this.props.workout)
          }, 100)
    }}/> : null}
    </>
}}

export default connect(null, {updateWorkout, setEditWorkoutForm, resetWorkoutForm, deleteWorkout})(EditWorkoutFormWrapper)