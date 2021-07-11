import React from 'react'
import {motion} from 'framer-motion'
import {hideLoader} from '../actions/loading'
import {connect} from 'react-redux'
import MyNotifications from './MyNotifications'
import '../notification.css'

const Notifications = ({hideLoader}) => {

    hideLoader()
    
    return (
        <div className="main">
        <div className="whole">
                <div className="top">
                    <h1></h1>
                </div>
                
                <div className="bottom">
                    <div className="feedProfileMain">
                    <div className="feedProfileContainer">
                    <li className="feedProfile">
                        <div className="feedLogo">
                                <motion.svg initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0 }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="wave-pulse" className="svg-inline--fa fa-wave-pulse fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"></path>
                                    <g className="fa-group">
                                        <path
                                        fill="currentColor"
                                        d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"
                                        className="fa-primary"
                                        ></path>
                                    </g>
                                </motion.svg>
                            </div>
                        </li>
                    </div>
                    <motion.div className="ratios"  >
                        <h4 className= "feedAlign"><motion.span  initial={{x: 75, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{opacity:0 }}  className="feedSection">MyTrainer<motion.span   className=" feedSectionFeed grayed">Notifications</motion.span></motion.span></h4>
                    </motion.div>

                    
                    </div>
                    <div className="notifications">
                        <MyNotifications/>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default connect(null, {hideLoader})(Notifications)