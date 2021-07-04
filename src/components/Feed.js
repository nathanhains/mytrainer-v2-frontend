import React from 'react'
import {hideLoader} from '../actions/loading'
import '../feed.css'

const Feed = () => {
    hideLoader()
    return (
        <div>
            <h1> Hi </h1>
        </div>
    )
}

export default Feed