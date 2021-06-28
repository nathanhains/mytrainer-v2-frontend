import React from 'react'
import WorkoutCard from './WorkoutCard'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
const Workouts = ({myWorkouts, userWorkouts}) => {
    const workouts = myWorkouts.map((w, i )=> <WorkoutCard workout={w} i={i} key={i}/>)
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    return workouts.length > 0 ? <motion.ul variants={container} initial="hidden" animate="show">{workouts}</motion.ul> : null
    
}

const mapStateToProps = ({myWorkouts}) => {
    return {
        myWorkouts
    }
}

export default connect(mapStateToProps)(Workouts)