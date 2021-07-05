import React, { useRef } from 'react'
import EditWorkoutFormWrapper from './EditWorkoutFormWrapper.js'
import Modal from './Modal'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import '../workout.css'
const WorkoutCard = ({workout, i, userId, feed, currentUser}) => {

    const showRef = useRef()

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (<div key={i}>
        
        <motion.div variants={item} onClick={() => showRef.current.open()}>
            <div className="card">
                {feed ? <Link style={{}} to={{
                            pathname: `/users/${workout.attributes.user.data.id}`,
                            props: { user: workout.attributes.user.data }
                          }}><img className="feedWorkoutProfile" src={workout.attributes.user.data.attributes.avatar} alt="Current User Home"/></Link> : null}
                <header className="article-header">
                    {workout.attributes.name}
                    {feed ?  <p className="workout-name grayed"><Link style={{textDecoration: 'none', color: '#b452ff'}} to={{
                            pathname: `/users/${workout.attributes.user.data.id}`,
                            props: { user: workout.attributes.user.data }
                          }}>@{workout.attributes.user.data.attributes.username}</Link>
                          </p> : <p className="workout-count grayed">{workout.attributes.workout_exercises.data.length}</p>}
                </header>
                <div className="author">
                    {}
                </div>
            </div>
        </motion.div>
        <Modal ref={showRef}>
        <h1 className="formDisplayName formDisplayLogo"><i className="fa fa-list settings"></i></h1>
        <div className="editFormContainerMain">
        
            <h2 className="formDisplayName workoutName">{workout.attributes.name}</h2>
            <h4 className="formDisplayName workoutNotes" >{workout.attributes.notes}</h4>
            <hr/>
            {workout.attributes.workout_exercises.data.map(w=> 
            <>
            <span className="formDisplayName workoutExerciseName" key={i}> {w.attributes.exercise.data.attributes.name}</span> 
            <div className="workoutExerciseVars">
                <span className="formDisplayName left-ish workoutExerciseSetMain">Set{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{i + 1}</span>)}</span><span className="formDisplayName left-ish workoutExerciseSetMain">Reps{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{s.attributes.reps ? s.attributes.reps : "N/A"}</span>)}</span> <span className="formDisplayName workoutExerciseSetMain">Lbs{w.attributes.set_groups.data.map((s, i)=> <span className="formDisplayName workoutExerciseSetChild">{s.attributes.lbs ? s.attributes.lbs : "N/A"}</span>)}</span>
            </div>
            </>
            )}
            {!userId ? feed ? currentUser.data.id === workout.attributes.user.data.id ? <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} workout={workout}/> : <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} addWorkout="Add Workout" workout={workout}/> : <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} workout={workout}/> : <EditWorkoutFormWrapper closeModal={()=> showRef.current.close()} addWorkout="Add Workout" workout={workout}/>}
        <br></br>
        </div>
        </Modal>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(WorkoutCard)