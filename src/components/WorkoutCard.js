import React, { useRef } from 'react'
import EditWorkoutFormWrapper from './EditWorkoutFormWrapper.js'
import Modal from './Modal'
import {motion} from 'framer-motion'

const WorkoutCard = ({workout, i}) => {

    const showRef = useRef()

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (<div key={i}>
        
        <motion.li variants={item} onClick={() => showRef.current.open()}>
            {workout.attributes.name}
        </motion.li>
        <Modal ref={showRef}>
            <h1>{workout.attributes.name}</h1>
            <h2>{workout.attributes.notes}</h2>
            {workout.attributes.workout_exercises.data.map(w=> 
            <>
            <h3>{w.attributes.exercise.data.attributes.name}</h3>
            <h4>Sets</h4>
            {w.attributes.set_groups.data.map((s, i)=> <h4 key={i}>{i+1}. Reps: {s.attributes.reps} Lbs: {s.attributes.lbs}</h4>)}
            </>
            )}
            <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} workout={workout}/>
        </Modal>
        </div>
    )
}

export default WorkoutCard