import React from 'react'
import {connect} from 'react-redux'
import {updateWorkoutForm} from '../actions/workoutForm'
import "../modal.css"
const AddedSetCard = ({exercise, i, set, updateWorkoutForm, workoutFormData}) =>{

        const handleChange = (e) => {
                const {name, value} = e.target
                const updatedFormInfo = {
                        ...workoutFormData,
                        exercises: workoutFormData.exercises.map(e => e.id === exercise.id ? {...exercise, addedSets: exercise.addedSets.map((s, index)=> index === i ? {...set, [name]: value} : s )}: e)
                    }
                updateWorkoutForm(updatedFormInfo)
        }

        return <>
                <p className="gray" key={i}><span className="formDisplayName left-ish">{i + 1}:</span> Reps: <input className="setInput" name="reps" onChange={handleChange} type="text" maxLength="3" size="3" value={set.reps ? set.reps : ""}/> Lbs: <input className="setInput" name="lbs"onChange={handleChange} type="text" maxLength="3" size="3" value={set.lbs ? set.lbs : ""}/><span className="formDisplayName right-ish settings" onClick={()=> 
                        updateWorkoutForm( {...workoutFormData, exercises: workoutFormData.exercises.map(e => e.id === exercise.id ? {...exercise, addedSets: exercise.addedSets.filter((s, idx) => idx !== i)}: e)})
                        }>x</span></p>
        </>
}

const mapStateToProps = ({workoutForm}) => {
        return {
                workoutFormData: workoutForm
        }
}

export default connect(mapStateToProps, {updateWorkoutForm})(AddedSetCard)