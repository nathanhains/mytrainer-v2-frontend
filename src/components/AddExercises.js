import React from 'react'
import WorkoutExercises from './WorkoutExercises'
import {connect} from 'react-redux'
import {getExercises, clearExercises} from '../actions/exercises'
import '../modal.css'

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
        <button className="add" onClick={() => {
            this.props.getExercises()
            this.setState({...this.state, clicked:true})
            }}><span>Add Exercise</span></button>
        {this.state.clicked ? <WorkoutExercises 
        addedExercises={this.state.addedExercises}
        addExercise={(e) => {
            this.state.addedExercises !== [] ? 
            this.setState({addedExercises: this.state.addedExercises.concat(e)}) :
            this.setState({addedExercises: e})
        }
        } 
        removeExercise={(e) => this.setState({addedExercises: this.state.addedExercises.filter(addedE => addedE.id !== e.id)})}
        sendExercises={()=> {
            this.props.clearExercises()
            this.props.updateWorkoutForm({...this.props.workoutFormData, exercises: this.state.addedExercises})
            this.setState({ clicked: false, addedExercises: []})
        }} 
        resetClicked={() => {
            this.props.clearExercises()
            this.setState({
                clicked: false, 
                addedExercises: []
            })
            }}/> : null}
        </>
    )
    }
}


export default connect(null, {getExercises, clearExercises})(AddExercises)