import React from 'react'
import WorkoutCard from './WorkoutCard'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
import '../workout.css'
const Workouts = ({myWorkouts, userWorkouts, userId}) => {

    const workouts = userWorkouts ? userWorkouts.map((w, i )=> <WorkoutCard workout={w} userId={userId} i={i} key={i}/>) : !userId && myWorkouts ? myWorkouts.map((w, i )=> <WorkoutCard workout={w} i={i} key={i}/>) : null

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    return workouts.length > 0 ? <motion.div className="card-container" variants={container} initial="hidden" animate="show">{workouts}</motion.div> : null
    
}

const mapStateToProps = ({myWorkouts}) => {
    return {
        myWorkouts
    }
}

export default connect(mapStateToProps)(Workouts)