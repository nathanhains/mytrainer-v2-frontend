import React, {forwardRef, useImperativeHandle, useState} from 'react'
import "../sure.css"
import {motion, AnimatePresence} from "framer-motion"

const Sure = forwardRef((props, ref) => {
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
                            props.cancel()
                          }, 100);
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
                        <div className="sure">
                        <h2 className="sureText">Are you sure?</h2>
                        <h4><button className="sureChoices" onClick={()=> {
                            setTimeout(() => {
                            props.cancel()
                          }, 100);
                        setOpen(false)}}><span>Cancel</span></button></h4>
                        <h3><button className="sureChoices" onClick={()=> {
                            setOpen(false) 
                            props.delete()
                            }}><span>Delete</span></button></h3>
                        </div>
                    </motion.div>
            </>
            )}
        </AnimatePresence>
    )
})

export default Sure