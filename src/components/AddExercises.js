import React from 'react'
import WorkoutExercises from './WorkoutExercises'
import {connect} from 'react-redux'
import {getExercises, clearExercises} from '../actions/exercises'

class AddExercises extends React.Component{
    constructor(){
        super()
        this.state = {
            clicked: false,
            addedExercises: []
        }
    }
    render(){
    return (
        <>
        <button onClick={() => {
            this.props.getExercises()
            this.setState({clicked:true})
            }}>Add Exercise</button>
        {this.state.clicked ? <WorkoutExercises 
        addExercise={(e) => {
            this.setState({addedExercises: this.state.addedExercises.concat(e)})
        }
        } 
        removeExercise={(e) => this.setState({addedExercises: this.state.addedExercises.filter(addedE => addedE.id !== e.id)})}
        sendExercises={()=> {
            this.setState({...this.state, clicked: false})
            this.props.clearExercises()
            this.props.updateWorkoutForm({...this.props.workoutFormData, exercises: this.state.addedExercises})
        }} 
        resetClicked={() => {
            this.props.clearExercises()
            this.setState({clicked: false, addedExercises: []})
            }}/> : null}
        </>
    )
    }
}


export default connect(null, {getExercises, clearExercises})(AddExercises)