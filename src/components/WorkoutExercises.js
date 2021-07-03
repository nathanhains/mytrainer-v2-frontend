import React, {forwardRef, useImperativeHandle, useState} from 'react'
import "../sure.css"
import {motion, AnimatePresence} from "framer-motion"
import {connect} from 'react-redux'
import WorkoutExerciseCard from './WorkoutExerciseCard'

const WorkoutExercises = forwardRef((props, ref) => {
    const [open, setOpen] = useState(true)

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    return (
        <AnimatePresence>
            {open && (
                <>
                <motion.div 
                    onClick={() => {
                        setTimeout(() => {
                            props.resetClicked()
                        }, 150);
                        setOpen(false)}}
                    className="sure-backdrop"/>
                <motion.div 
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                        
                    }}
                    exit={{
                        scale: 0
                    }}
                    className="sure-content-wrapper"/>
                    <motion.div 
                        initial={{
                            y: 100,
                            opacity: 0,
                            
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0
                        }}
                        className="sure-content-wrapper">
                            <h1 className="exerciseDisplayLogo formDisplayName">{props.addedExercises.length}</h1>
                            <div className = "setContainerMain">
                                <div className="sets">
                                    {props.exercises.map((e, i) => <WorkoutExerciseCard addExercise={props.addExercise} removeExercise={props.removeExercise} exercise={e} key={i}/>)}
                                </div>
                                <button className="exerciseFormButtonSubmit" onClick={()=> {
                                    setOpen(false) 
                                    props.sendExercises()
                                }}><i className="fa fa-plus"></i></button>
                            </div>
                    </motion.div>
            </>
            )}
        </AnimatePresence>
    )
})

const mapStateToProps = ({exercises}) => {
    return {
        exercises
    }
}

export default connect(mapStateToProps)(WorkoutExercises)