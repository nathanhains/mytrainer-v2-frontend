import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Welcome = () => {
    return(
    <motion.div initial={{opacity: 0}}animate={{opacity: 1}} exit={{opacity:0 }}>
        <h4>Welcome, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
    </motion.div>
    )
}

export default Welcome