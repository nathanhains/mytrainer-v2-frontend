import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import '../notification.css'
const NotificationCard = ({notification, i}) => {

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (<div key={i}>
        
        <motion.div variants={item}>
            <div className="card">
                <Link style={{}} to={{
                            pathname: `/users/${notification.attributes.sender.id}`,
                            props: { user: notification.attributes.sender}
                          }}><img className="feedWorkoutProfile" src={notification.attributes.sender.avatar} alt="Current User Home"/></Link> 
                <header className="notification-header">
                    <p className="notificationName grayed"><Link style={{textDecoration: 'none', color: '#b452ff'}} to={{
                            pathname: `/users/${notification.attributes.sender.id}`,
                            props: { user: notification.attributes.sender }
                          }}>{notification.attributes.sender.username}</Link>
                          </p> 
                    <span className="activity-type">{notification.attributes.activity_type}</span>
                </header>
                <div className="author">
                    
                </div>
            </div>
        </motion.div>
        </div>
    )
}

export default NotificationCard