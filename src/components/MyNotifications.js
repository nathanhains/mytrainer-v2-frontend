import React from 'react'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
import NotificationCard from './NotificationCard'

const MyNotifications = ({notifications}) => {

    const notificationCards = notifications ? notifications.map((n, i) => <NotificationCard i={i} notification={n}/>) : null

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    return notifications.length > 0 ? <motion.div className="notification-container" variants={container} initial="hidden" animate="show">{notificationCards}</motion.div> : null
    
}

const mapStateToProps = ({notifications}) => {
    return {
        notifications
    }
}

export default connect(mapStateToProps)(MyNotifications)