import React from 'react'
import AddedSetCard from './AddedSetCard'
import AddSets from './AddSets'

const AddedExerciseCard = ({exercise, i, updateWorkoutForm, workoutFormData}) =>{

        return <>
            <h4 key={i}> {exercise.attributes.name} <button onClick={() => updateWorkoutForm({...workoutFormData, exercises: workoutFormData.exercises.filter(e=> e.id !== exercise.id)})}>X</button></h4> 
            {exercise.addedSets.map((s, i) => <AddedSetCard exercise={exercise} set={s} key={i} i={i}/>)}
            <AddSets updateWorkoutForm={updateWorkoutForm} workoutFormData={workoutFormData} exercise={exercise}/>
            <br></br>
        </>
}

export default AddedExerciseCard