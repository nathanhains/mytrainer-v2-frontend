import React from 'react'
import WorkoutCard from './WorkoutCard'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
import '../workout.css'
const Workouts = ({myWorkouts, userWorkouts, userId, feed, ourWorkouts}) => {

    const workouts = userWorkouts ? userWorkouts.map((w, i )=> <WorkoutCard workout={w} userId={userId} i={i} key={i}/>) : feed ? ourWorkouts.map((w, i )=> <WorkoutCard workout={w} i={i} key={i} feed={feed}/>) : !userId && myWorkouts ? myWorkouts.map((w, i )=> <WorkoutCard workout={w} i={i} key={i}/>) : null

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    return workouts.length > 0 ? <motion.div className={feed ? "feedCard-container" : "card-container"} variants={container} initial="hidden" animate="show">{workouts}</motion.div> : null
    
}

const mapStateToProps = ({myWorkouts, ourWorkouts}) => {
    return {
        myWorkouts,
        ourWorkouts
    }
}

export default connect(mapStateToProps)(Workouts)