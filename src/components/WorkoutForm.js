import React, {useRef} from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import {updateWorkoutForm} from '../actions/workoutForm'
import AddExercises from './AddExercises'
import { updateWorkout } from '../actions/myWorkouts'
import AddedExerciseCard from './AddedExerciseCard'

const WorkoutForm = ({workoutFormData, updateWorkoutForm, handleSubmit, user_id, display}) => {

    const modalRef = useRef()

    const handleChange = (e) => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...workoutFormData,
            [name]: value
        }

        updateWorkoutForm(updatedFormInfo)
    }

    return(
    <div>
        <button onClick={() => {modalRef.current.open()}}>{display}</button>
        <Modal ref={modalRef}>
        <form onSubmit={e => handleSubmit(e, workoutFormData, user_id, modalRef)}>
            <input type="text" onChange={handleChange} placeholder="name" name="name" value={workoutFormData.name}/> <input type="submit" value="Save"/>
            <input type="text" onChange={handleChange} placeholder="notes" name="notes" value={workoutFormData.notes}/>
            <br></br>
        </form>
        {workoutFormData.exercises ? workoutFormData.exercises.map((e, i) => <AddedExerciseCard updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData} key={i} exercise={e}/> ) : null}
        <br></br>
        <AddExercises updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData}/>
        </Modal>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        workoutFormData: state.workoutForm,
        user_id: state.currentUser ? state.currentUser.data.id : ""
    }
}

export default connect(mapStateToProps, {updateWorkoutForm})(WorkoutForm);