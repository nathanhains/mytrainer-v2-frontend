import React from 'react'

class WorkoutExerciseCard extends React.Component {
    constructor(){
        super()
        this.state ={
            bgColor: ""
        }
    }

    add = (e) => {
        this.props.addExercise({...e, addedSets: []})
        this.setState({bgColor: "#D3D3D3"})
    }

    remove = (e) => {
        this.props.removeExercise(e)
        this.setState({bgColor: ""})
    }



    render(){
        return <>
            <h4 style={{backgroundColor: this.state.bgColor}} onClick={()=> this.state.bgColor === "" ?  this.add(this.props.exercise) : this.remove(this.props.exercise)}>{this.props.exercise.attributes.name}</h4>
        </>
            
        
    }
}

export default WorkoutExerciseCard