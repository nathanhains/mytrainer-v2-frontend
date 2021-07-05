import React from 'react'
import {hideLoader} from '../actions/loading'
import {getMyWorkouts} from '../actions/myWorkouts'
import {clearOurWorkouts} from '../actions/ourWorkouts'
import {getUsers} from '../actions/users'
import '../feed.css'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
import Modal from './Modal'
import Workouts from './Workouts'
class Feed  extends React.Component {
    
    componentDidMount() {
        let feed = true
        this.props.getMyWorkouts(feed)
    }

    componentWillUnmount() {
        this.props.clearOurWorkouts()
    }
    
    render(){

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
                                <motion.svg initial={{}} animate={{}} exit={{opacity:0 }}  aria-hidden="true" focusable="false" data-prefix="far" data-icon="house" className="svg-inline--fa fa-house fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.5 229.7l-263.1-224C299 1.891 293.5 .0029 288 .0029S276.1 1.891 272.5 5.672L8.471 229.7C2.877 234.4 0 241.2 0 247.1c0 16.03 13.69 24 24.01 24c5.484 0 11-1.865 15.52-5.686L64 245.5l.0039 186.5c.002 44.18 35.82 79.1 80 79.1h287.1c44.18 0 79.1-35.82 80-79.1l-.001-186.5l24.47 20.76c4.516 3.812 10.03 5.688 15.52 5.688c10.16 0 24.02-8.031 24.02-24C575.1 241.2 573.1 234.4 567.5 229.7zM335.1 463.1H240V320h95.1V463.1zM463.1 431.1c0 17.6-14.4 32-32 32h-47.1V312c0-22.06-17.94-40-40-40H232C209.9 272 192 289.9 192 312v151.1H144c-17.6 0-32-14.4-32-32V207.1c0-.9629-.4375-1.783-.5488-2.717L287.1 55.46l175.1 149.4V431.1z"></path>
                                    <g className="fa-group">
                                        <path
                                        fill="currentColor"
                                        d="M567.5 229.7l-263.1-224C299 1.891 293.5 .0029 288 .0029S276.1 1.891 272.5 5.672L8.471 229.7C2.877 234.4 0 241.2 0 247.1c0 16.03 13.69 24 24.01 24c5.484 0 11-1.865 15.52-5.686L64 245.5l.0039 186.5c.002 44.18 35.82 79.1 80 79.1h287.1c44.18 0 79.1-35.82 80-79.1l-.001-186.5l24.47 20.76c4.516 3.812 10.03 5.688 15.52 5.688c10.16 0 24.02-8.031 24.02-24C575.1 241.2 573.1 234.4 567.5 229.7zM335.1 463.1H240V320h95.1V463.1zM463.1 431.1c0 17.6-14.4 32-32 32h-47.1V312c0-22.06-17.94-40-40-40H232C209.9 272 192 289.9 192 312v151.1H144c-17.6 0-32-14.4-32-32V207.1c0-.9629-.4375-1.783-.5488-2.717L287.1 55.46l175.1 149.4V431.1z"
                                        className="fa-primary"
                                        ></path>
                                    </g>
                                </motion.svg>
                            </div>
                        </li>
                    </div>
                    <motion.div className="ratios"  >
                        <h4 className= "feedAlign"><motion.span  initial={{x: 75, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{opacity:0 }}  className="feedSection">MyTrainer<motion.span   className=" feedSectionFeed grayed">Feed</motion.span></motion.span></h4>
                    </motion.div>

                    
                    </div>
                            
                    <div className="workouts">
                        <Workouts feed={true} />
                    </div>
                    
                </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = ({ourWorkouts}) => {
    return {
        ourWorkouts
    }
}

export default connect(mapStateToProps, {hideLoader, getMyWorkouts, clearOurWorkouts, getUsers})(Feed)