import React, {forwardRef, useImperativeHandle, useState} from 'react'
import "../modal.css"
import {motion, AnimatePresence} from "framer-motion"

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

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
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    onClick={() => setOpen(false)}
                    className="modal-backdrop"/>
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
                    className="modal-content-wrapper"/>
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
                        className="modal-content-wrapper">
                        {props.children}
                    </motion.div>
            </>
            )}
        </AnimatePresence>
    )
})

export default Modal