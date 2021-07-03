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
            console.log(this.state.addedExercises)
            this.setState({clicked:true})
            }}>Add Exercise</button>
        {this.state.clicked ? <WorkoutExercises 
        addedExercises={this.state.addedExercises}
        addExercise={(e) => {
            this.setState({addedExercises: this.state.addedExercises.concat(e)})
        }
        } 
        removeExercise={(e) => this.setState({addedExercises: this.state.addedExercises.filter(addedE => addedE.id !== e.id)})}
        sendExercises={()=> {
            this.setState({ clicked: false, addedExercises: []})
            this.props.clearExercises()
            this.props.updateWorkoutForm({...this.props.workoutFormData, exercises: this.state.addedExercises})
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