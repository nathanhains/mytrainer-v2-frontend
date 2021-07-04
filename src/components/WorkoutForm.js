import React, {useRef} from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import {updateWorkoutForm} from '../actions/workoutForm'
import AddExercises from './AddExercises'
import AddedExerciseCard from './AddedExerciseCard'
import '../modal.css'

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
    <>
        {/* <button onClick={() => {modalRef.current.open()}}>{display}</button> */}
        {display === "edit" ? <i onClick={() => {modalRef.current.open()}} className="fa fa-ellipsis formDisplayName editWorkout"><h2>...</h2></i> : 
        <li class="nav-item">
            <div onClick={() => {modalRef.current.open()}} class="nav-link workout">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list" class="svg-inline--fa fa-list fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 208h-64C7.125 208 0 215.1 0 224v64c0 8.875 7.125 16 16 16h64C88.88 304 96 296.9 96 288V224C96 215.1 88.88 208 80 208zM80 368h-64C7.125 368 0 375.1 0 384v64c0 8.875 7.125 16 16 16h64C88.88 464 96 456.9 96 448v-64C96 375.1 88.88 368 80 368zM80 48h-64C7.125 48 0 55.13 0 64v64c0 8.875 7.125 16 16 16h64C88.88 144 96 136.9 96 128V64C96 55.13 88.88 48 80 48zM488 232H183.1C170.7 232 160 242.7 160 256s10.75 24 23.1 24H488C501.3 280 512 269.3 512 256S501.3 232 488 232zM488 72H183.1C170.7 72 160 82.75 160 95.1S170.7 120 183.1 120H488c13.25 0 24-10.75 24-23.1S501.3 72 488 72zM488 392H183.1C170.7 392 160 402.7 160 416s10.75 24 23.1 24H488c13.25 0 24-10.75 24-24S501.3 392 488 392z"></path>
                    <g class="fa-group">
                    <path
                        fill="currentColor"
                        d="M80 208h-64C7.125 208 0 215.1 0 224v64c0 8.875 7.125 16 16 16h64C88.88 304 96 296.9 96 288V224C96 215.1 88.88 208 80 208zM80 368h-64C7.125 368 0 375.1 0 384v64c0 8.875 7.125 16 16 16h64C88.88 464 96 456.9 96 448v-64C96 375.1 88.88 368 80 368zM80 48h-64C7.125 48 0 55.13 0 64v64c0 8.875 7.125 16 16 16h64C88.88 144 96 136.9 96 128V64C96 55.13 88.88 48 80 48zM488 232H183.1C170.7 232 160 242.7 160 256s10.75 24 23.1 24H488C501.3 280 512 269.3 512 256S501.3 232 488 232zM488 72H183.1C170.7 72 160 82.75 160 95.1S170.7 120 183.1 120H488c13.25 0 24-10.75 24-23.1S501.3 72 488 72zM488 392H183.1C170.7 392 160 402.7 160 416s10.75 24 23.1 24H488c13.25 0 24-10.75 24-24S501.3 392 488 392z"                
                        class="fa-primary"
                    ></path>
                    </g>
                </svg>
            <span class="link-text">{display}</span>
            </div>
        </li>}
        <Modal ref={modalRef}>
        <h1 className="formDisplayName formDisplayLogo">{display === "edit"  ? <i className={ "fa fa-ellipsis editWorkoutLogo"}><h2>...</h2></i> : <i className={ "fa fa-plus settings"}></i>}</h1>
        <div className="editFormContainerMain">
        <form className="formContainer" onSubmit={e => handleSubmit(e, workoutFormData, user_id, modalRef)}>
            <input className="input" type="text" onChange={handleChange} placeholder="Workout Name" name="name" value={workoutFormData.name}/> <input className="workoutFormButtonSubmit" type="submit" value="Save"/>
            <input className="input" type="text" onChange={handleChange} placeholder="Notes" name="notes" value={workoutFormData.notes}/>
            <br></br>
        </form>
        
        {workoutFormData.exercises ? workoutFormData.exercises.map((e, i) => <AddedExerciseCard updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData} key={i} exercise={e}/> ) : null}
        <br></br>
        <AddExercises updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData}/>
        </div>
        </Modal>
    </>
    )
}

const mapStateToProps = state => {
    return {
        workoutFormData: state.workoutForm,
        user_id: state.currentUser ? state.currentUser.data.id : ""
    }
}

export default connect(mapStateToProps, {updateWorkoutForm})(WorkoutForm);