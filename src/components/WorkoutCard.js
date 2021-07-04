import React, { useRef } from 'react'
import EditWorkoutFormWrapper from './EditWorkoutFormWrapper.js'
import Modal from './Modal'
import {motion} from 'framer-motion'
import '../workout.css'
const WorkoutCard = ({workout, i, userId}) => {

    const showRef = useRef()

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (<div key={i}>
        
        <motion.div variants={item} onClick={() => showRef.current.open()}>
            <div class="card">
                <header class="article-header">
                    {workout.attributes.name}
                </header>
                <div class="author">

    
                </div>
            </div>
        </motion.div>
        <Modal ref={showRef}>
        <h1 className="formDisplayName formDisplayLogo"><i className="fa fa-list settings"></i></h1>
        <div className="editFormContainerMain">
        
            <h2 className="formDisplayName workoutName">{workout.attributes.name}</h2>
            <h4 class="formDisplayName workoutNotes" >{workout.attributes.notes}</h4>
            <br></br>
            <hr/>
        
        
            {workout.attributes.workout_exercises.data.map(w=> 
            <>
            <span class="formDisplayName workoutExerciseName" key={i}> {w.attributes.exercise.data.attributes.name}</span> 
            <div className="workoutExerciseVars">
                <span className="formDisplayName left-ish workoutExerciseSetMain">Set{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{i + 1}</span>)}</span><span className="formDisplayName left-ish workoutExerciseSetMain">Reps{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{s.attributes.reps ? s.attributes.reps : "N/A"}</span>)}</span> <span className="formDisplayName workoutExerciseSetMain">Lbs{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{s.attributes.lbs ? s.attributes.lbs : "N/A"}</span>)}</span>
            </div>
            </>
            )}
            {!userId ? <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} workout={workout}/> : null}
        <br></br>
        </div>
        </Modal>
        </div>
    )
}

export default WorkoutCard