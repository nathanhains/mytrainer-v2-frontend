// import React from 'react'
// import { connect } from 'react-redux'
// import {NavLink} from 'react-router-dom'
// import Logout from './Logout'

// import '../navbar.css'
// import NewWorkoutFormWrapper from './NewWorkoutFormWrapper'
// import Search from './Search'

// const NavBar = ({currentUser}) => {
//     return (
//     <div className="NavBar">
//         <NavLink to="/">Home</NavLink>
//         <NewWorkoutFormWrapper />
//         <Logout/>
//         <Search/>
//     </div>
//     )
// }

// const mapStateToProps = ({currentUser}) => {
//     return {
//         currentUser
//     }
// }

// export default connect(mapStateToProps)(NavBar);


import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'

import '../navbar.css'
import NewWorkoutFormWrapper from './NewWorkoutFormWrapper'
import Search from './Search'

const NavBar = ({currentUser}) => {
    return (
        <>
          <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
      <NavLink to="/" className="nav-link">
          <span class="link-text logo-text">MyTrainer</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dumbbell" class="svg-inline--fa fa-dumbbell fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"></path>
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"
                className="fa-primary"
              ></path>
            </g>
            </svg>
        </NavLink>
      </li>

      <li className="nav-item">
      <NavLink to="/" className="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="house" class="svg-inline--fa fa-house fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.5 229.7l-263.1-224C299 1.891 293.5 .0029 288 .0029S276.1 1.891 272.5 5.672L8.471 229.7C2.877 234.4 0 241.2 0 247.1c0 16.03 13.69 24 24.01 24c5.484 0 11-1.865 15.52-5.686L64 245.5l.0039 186.5c.002 44.18 35.82 79.1 80 79.1h287.1c44.18 0 79.1-35.82 80-79.1l-.001-186.5l24.47 20.76c4.516 3.812 10.03 5.688 15.52 5.688c10.16 0 24.02-8.031 24.02-24C575.1 241.2 573.1 234.4 567.5 229.7zM335.1 463.1H240V320h95.1V463.1zM463.1 431.1c0 17.6-14.4 32-32 32h-47.1V312c0-22.06-17.94-40-40-40H232C209.9 272 192 289.9 192 312v151.1H144c-17.6 0-32-14.4-32-32V207.1c0-.9629-.4375-1.783-.5488-2.717L287.1 55.46l175.1 149.4V431.1z"></path>
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M567.5 229.7l-263.1-224C299 1.891 293.5 .0029 288 .0029S276.1 1.891 272.5 5.672L8.471 229.7C2.877 234.4 0 241.2 0 247.1c0 16.03 13.69 24 24.01 24c5.484 0 11-1.865 15.52-5.686L64 245.5l.0039 186.5c.002 44.18 35.82 79.1 80 79.1h287.1c44.18 0 79.1-35.82 80-79.1l-.001-186.5l24.47 20.76c4.516 3.812 10.03 5.688 15.52 5.688c10.16 0 24.02-8.031 24.02-24C575.1 241.2 573.1 234.4 567.5 229.7zM335.1 463.1H240V320h95.1V463.1zM463.1 431.1c0 17.6-14.4 32-32 32h-47.1V312c0-22.06-17.94-40-40-40H232C209.9 272 192 289.9 192 312v151.1H144c-17.6 0-32-14.4-32-32V207.1c0-.9629-.4375-1.783-.5488-2.717L287.1 55.46l175.1 149.4V431.1z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Home</span>
          </NavLink>
      </li>

      <Search/>

      <NewWorkoutFormWrapper />

      <li className="nav-item">
        <NavLink to="/" className="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="wave-pulse" class="svg-inline--fa fa-wave-pulse fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"></path>
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Exercises</span>
        </NavLink>
      </li>

      <li className="nav-item">
      <NavLink to="/" className="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"></path>
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Profile</span>
        </NavLink>
      </li>

    <li className="nav-profile-container">
        <img className="nav-profile" src={currentUser ? currentUser.data.attributes.avatar : null}/>
    </li>
    </ul>
  </nav>
        </>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar);

