import React from 'react'

const WorkoutCard = ({workout}) => {
    return (
        <li>
            {workout.attributes.name}
        </li>
    )
}

export default WorkoutCard