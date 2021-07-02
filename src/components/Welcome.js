import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import '../welcome.css'
import Login from './Login'
import {Provider} from 'react-redux'
import {AccountContext} from './AccountContext'
import NewUserWrapper from './NewUserWrapper'

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}

const Welcome = () => {
    const [isExpanded, setExpanded] = useState(false)
    const [active, setActive] = useState('signin')

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000- 1500)
    }

    const switchToSignup = () => {
        playExpandingAnimation()
        setTimeout(()=> {
            setActive('signup')
        }, 400)
    }

    const switchToSignin = () => {
        playExpandingAnimation()
        setTimeout(()=> {
            setActive('signin')
        }, 400)
    }

    const contextValue = {switchToSignup, switchToSignin}
    return(
       <AccountContext.Provider value={contextValue}>
        <div className="mainContainer">
        <div className="boxContainer">
            <div className="topContainer">
                <motion.div initial={false} transition={expandingTransition} variants={backdropVariants} animate={isExpanded ? "expanded" : "collapsed"} className="backDrop"></motion.div>
                {active === "signin" && <div className="headerContainer">
                    <h2 className="headerText">Welcome</h2>
                    <h2 className="headerText">Back</h2>
                    <h5 className="smallText">Please sign in to continue</h5>
                </div>}
                {active === "signup" && <div className="headerContainer">
                    <h2 className="headerText">Create</h2>
                    <h2 className="headerText">Account</h2>
                    <h5 className="smallText">Please sign up to continue</h5>
                </div>}
            </div>
            <div className="innerContainer">
                {active === "signin" && <Login/>}
                {active === "signup" && <NewUserWrapper/>}
            </div>
        </div>
        </div>
        </AccountContext.Provider>
    )
}

export default Welcome