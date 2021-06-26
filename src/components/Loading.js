import React from 'react'
import '../loading.css'
import {connect} from 'react-redux'


class Loading extends React.Component{
    state ={}
    
    render() {
    const {loading} = this.props

    if(!loading) return null;

    return (
        <div className="loader-container">
            <i className="fa fa-spinner fa-pulse load fa-5x"></i>
        </div>
    )
    }
}

const mapStateToProps = state =>{

    return {
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps)(Loading)