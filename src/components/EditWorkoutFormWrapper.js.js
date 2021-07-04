import React from 'react'
import { connect } from 'react-redux'
import {updateWorkout, deleteWorkout, createWorkout} from '../actions/myWorkouts'
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
    // adjust this 
    handleSubmit = (e, workoutFormData, user_id, modalRef) => {
        const {updateWorkout, workout, createWorkout} = this.props
        e.preventDefault()

        this.props.addWorkout ? 
        createWorkout({
            ...workoutFormData,
            user_id
        }) :
        updateWorkout({
            ...workoutFormData,
            workout_id: workout.id,
            user_id
        })
        
        modalRef.current.close()
    }
    render() {
    return <>
    <WorkoutForm handleSubmit={this.handleSubmit} display={this.props.addWorkout ? "add workout" : "edit"}/>
    {this.props.addWorkout ? null : <i className="workoutDelete fa fa-trash fa-lg" onClick={() => this.setState({clicked: true})}></i>}
    {this.state.clicked ? <Sure cancel={()=> this.setState({clicked: false})} delete={() => {
        this.props.closeModal()
        setTimeout(() => {
            this.props.deleteWorkout(this.props.workout)
          }, 100)
    }}/> : null}
    </>
}}

export default connect(null, {updateWorkout, setEditWorkoutForm, resetWorkoutForm, deleteWorkout, createWorkout})(EditWorkoutFormWrapper)