import React from 'react'
import {connect} from 'react-redux'
import {updateWorkoutForm} from '../actions/workoutForm'

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
                <p key={i}>{i + 1}: Reps: <input name="reps" onChange={handleChange} type="text" maxLength="3" size="3" value={set.reps ? set.reps : ""}/> Lbs: <input name="lbs"onChange={handleChange} type="text" maxLength="3" size="3" value={set.lbs ? set.lbs : ""}/> <button onClick={()=> 
                        updateWorkoutForm( {...workoutFormData, exercises: workoutFormData.exercises.map(e => e.id === exercise.id ? {...exercise, addedSets: exercise.addedSets.filter((s, idx) => idx !== i)}: e)})
                        } >X</button></p>
        </>
}

const mapStateToProps = ({workoutForm}) => {
        return {
                workoutFormData: workoutForm
        }
}

export default connect(mapStateToProps, {updateWorkoutForm})(AddedSetCard)