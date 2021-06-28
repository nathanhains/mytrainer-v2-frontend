import React, { useRef, useState } from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



const Search = ({users, currentUser}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const modalRef = useRef()
    return (
        <div>
            <button onClick={() => {modalRef.current.open()}}>Search</button>
            <Modal ref={modalRef}>
                <input type="text" autoFocus={true} onChange={e => setSearchTerm(e.target.value)}/>
                    {searchTerm === "" ? <h3>Suggested Users:</h3> : null}
                    <ul>
                        { users.data ? users.data.filter((u)=> {
                            if (searchTerm === "" && u.attributes.name !== currentUser.data.attributes.name) {
                                return u
                            }else if (u.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) && u.attributes.name !== currentUser.data.attributes.name){
                                return u
                            }
                        }).map((user,key)=> <li key={key}><Link onClick={() => modalRef.current.close()} to={{
                            pathname: `/users/${user.id}`,
                            props: { user: user }
                          }}>{user.attributes.name}</Link></li>) : null}
                    </ul>
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

export default connect(mapStateToProps)(Search)