import React from 'react'
import '../sets.css'

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
            <div className="setCard" style={{backgroundColor: this.state.bgColor}} onClick={()=> this.state.bgColor === "" ?  this.add(this.props.exercise) : this.remove(this.props.exercise)}>
                <header className="article-header" >
                    <span className="formDisplayName">{this.props.exercise.attributes.name}</span> {this.state.bgColor !== "" ? <i className="fa fa-check-square formDisplayName"></i> : null}
                    <p className="smallText formDisplayName">{this.props.exercise.attributes.category.data.attributes.name}</p>
                </header>
                <div className="author">
    
                    
                </div>
            </div>
        </>
            
        
    }
}

export default WorkoutExerciseCard