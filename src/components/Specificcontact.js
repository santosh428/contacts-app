import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Specificcontact = (props) => {
    console.log(props)
    const {name,email} = props.location.state.contact
    return (
        <div className ="specific-contact">
            <div className = "contact-container">
            <h1>{name}</h1>
            <h5>{email}</h5>
        </div>
        <div className = "linkdiv">
        <Link to="/">
        <button>Back to home</button>
        </Link>
        </div>
        </div>
    )
}

export default Specificcontact
