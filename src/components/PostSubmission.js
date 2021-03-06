import React, { useState } from 'react'
import "../postSubmission.css"
import {motion, AnimatePresence} from "framer-motion"
import { connect } from 'react-redux'
import { Checkmark } from 'react-checkmark'

const PostSubmission = ({postSubmission}) => {
    const [open] = useState(true)
    
    return (
        <AnimatePresence>
            {postSubmission === true && open ? (
                <>
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
                    className="check-content-wrapper"><Checkmark size='256px' color='#b452ff'/></motion.div>
            </>
            ): null}
        </AnimatePresence>
    )
}

const mapStateToProps = ({postSubmission}) => {
    return {
        postSubmission
    }
}

export default connect(mapStateToProps)(PostSubmission)