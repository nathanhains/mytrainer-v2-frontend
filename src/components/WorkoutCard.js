import React, { useRef } from 'react'
import EditWorkoutFormWrapper from './EditWorkoutFormWrapper.js'
import Modal from './Modal'
const WorkoutCard = ({workout}) => {

    const showRef = useRef()

    return (<div>
        <li onClick={() => showRef.current.open()}>
            {workout.attributes.name}
        </li>
        <Modal ref={showRef}>
            {workout.attributes.name}
            <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} workout={workout}/>
        </Modal>
        </div>
    )
}

export default WorkoutCard