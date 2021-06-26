import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return(
    <div>
        <h4>Welcome, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
    </div>
    )
}

export default Welcome