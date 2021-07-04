import React from 'react'
import {connect} from 'react-redux'
import '../modal.css'
class AddSets extends React.Component{

    render(){
    return (
        <>
        <button className="addSet" onClick={() => {this.props.updateWorkoutForm({...this.props.workoutFormData, exercises: this.props.workoutFormData.exercises.map(e => e.id === this.props.exercise.id ? {...this.props.exercise, addedSets: this.props.exercise.addedSets.concat({lbs: "", reps: ""})}: e)})}}><span>Add Set</span></button>
        </>
    )
    }
}


export default connect(null)(AddSets)