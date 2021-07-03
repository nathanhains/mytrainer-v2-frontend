import React from 'react'
import AddedSetCard from './AddedSetCard'
import AddSets from './AddSets'
import '../modal.css'

const AddedExerciseCard = ({exercise, i, updateWorkoutForm, workoutFormData}) =>{

        return <>
            <span class="gray" key={i}> {exercise.attributes.name} <i onClick={() => updateWorkoutForm({...workoutFormData, exercises: workoutFormData.exercises.filter(e=> e.id !== exercise.id)})} class="settings formDisplayName fa fa-trash"></i></span> 
            {exercise.addedSets.map((s, i) => <AddedSetCard exercise={exercise} set={s} key={i} i={i}/>)}
            <AddSets updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData} exercise={exercise}/>
            <br></br>
        </>
}

export default AddedExerciseCard