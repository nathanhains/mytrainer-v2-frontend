import React, { useRef, useState } from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getUsers} from '../actions/users'
import {motion} from 'framer-motion'


const Search = ({users, currentUser, getUsers}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }

    const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
    }

    const modalRef = useRef()
    return (
        <>
            <li className="nav-item">
                <a onClick={() => {
                    getUsers()
                    modalRef.current.open()
                    }}className="nav-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="svg-inline--fa fa-magnifying-glass fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path>
                        <g className="fa-group">
                            <path
                            fill="currentColor"
                            d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"                
                            className="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <span className="link-text">Search</span>
                </a>
            </li>
            <Modal ref={modalRef}>
                    <h1 className="formDisplayName formDisplayLogo"><i className={ "fa fa-search editWorkoutLogo"}></i></h1>
                    <div className="editFormContainerMain">
                    <input className="searchInput" type="text" autoFocus={true} onChange={e => setSearchTerm(e.target.value)}/>
                        <br></br>
                        {searchTerm === "" ? <h3 className = "formDisplayName">Suggested Users:</h3> : null}
                    <motion.div variants={container} initial="hidden" animate="show">
                        { users.data ? users.data.filter((u)=> {
                            if (searchTerm === "" && u.attributes.username !== currentUser.data.attributes.username) {
                                return u
                            }else if (u.attributes.username.toLowerCase().includes(searchTerm.toLowerCase()) && u.attributes.username !== currentUser.data.attributes.username){
                                return u
                            }
                        }).map((user,key)=> <motion.div className="formDisplayName searchLink" variants={item} initial="hidden" animate="show" key={key}><Link style={{ textDecoration: 'none', color: '#b452ff'}} onClick={() => modalRef.current.close()} to={{
                            pathname: `/users/${user.id}`,
                            props: { user: user }
                          }}>  <div className="searchProfileMain">
                                <img className="searchProfile" alt="User Avatar" src={user.attributes.avatar}/>
                                <h5 className="searchLink">{user.attributes.username}</h5>
                              </div>
                              </Link></motion.div>) : null}
                    </motion.div>
                    </div>
                
                </Modal>
        </>

       )
}

const mapStateToProps = ({users, currentUser}) =>{

    return {
        users,
        currentUser
    }
}

export default connect(mapStateToProps, ({getUsers}))(Search)