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
        <div>
            <button onClick={() => {
                getUsers()
                modalRef.current.open()
                }}>Search</button>
            <Modal ref={modalRef}>
                <input type="text" autoFocus={true} onChange={e => setSearchTerm(e.target.value)}/>
                    {searchTerm === "" ? <h3>Suggested Users:</h3> : null}
                    <motion.ul variants={container} initial="hidden" animate="show">
                        { users.data ? users.data.filter((u)=> {
                            if (searchTerm === "" && u.attributes.name !== currentUser.data.attributes.name) {
                                return u
                            }else if (u.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) && u.attributes.name !== currentUser.data.attributes.name){
                                return u
                            }
                        }).map((user,key)=> <motion.li variants={item} initial="hidden" animate="show" key={key}><Link onClick={() => modalRef.current.close()} to={{
                            pathname: `/users/${user.id}`,
                            props: { user: user }
                          }}>{user.attributes.name}</Link></motion.li>) : null}
                    </motion.ul>
                </Modal>
        </div>

       )
}

const mapStateToProps = ({users, currentUser}) =>{

    return {
        users,
        currentUser
    }
}

export default connect(mapStateToProps, ({getUsers}))(Search)