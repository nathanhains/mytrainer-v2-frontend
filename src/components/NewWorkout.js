import React, {useRef} from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import {updateNewWorkoutForm} from '../actions/newWorkoutForm'
import {createWorkout} from '../actions/myWorkouts'


const NewWorkout = ({newWorkoutFormData, updateNewWorkoutForm, createWorkout, user_id, history}) => {

    const modalRef = useRef()

    const handleChange = (e) => {
        const {name, value} = e.target

        const updatedFormInfo = {
            ...newWorkoutFormData,
            [name]: value
        }

        updateNewWorkoutForm(updatedFormInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createWorkout({
            ...newWorkoutFormData,
            user_id
        })
    }

    return(
    <div>
        <button onClick={() => modalRef.current.open()}>New Workout</button>
        <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="name" name="name" value={newWorkoutFormData.name}/>
            <input type="text" onChange={handleChange} placeholder="notes" name="notes" value={newWorkoutFormData.notes}/>
            <input type="submit" value="Create Workout"/>
        </form>
        </Modal>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        newWorkoutFormData: state.newWorkoutForm,
        user_id: state.currentUser.data.id
    }
}

export default connect(mapStateToProps, {updateNewWorkoutForm, createWorkout})(NewWorkout);