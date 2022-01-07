import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Contacts = (props) => {
    const styleLink = {
        textDecoration: "none",
        color:"black"
    }

    const{id,name,email} = props.contact
     
    return (
        <div className = "contactlist">
        <div className="list-text">
        <NavLink style={styleLink} to = {{pathname : `/contact/${id}`,state:{contact:props.contact}} }>
        <h4>{name}</h4>
        <p><small>{email}</small></p>
        </NavLink>
        </div>
        <div className="list-icon">
           <Link style={styleLink} to = {{pathname : `/edit`,state:{contact:props.contact}} }>
            <i className="far fa-edit"></i>
            </Link>
            <i className="fas fa-trash-alt" onClick={()=>(props.deleteContact(id))}></i>
            </div>
        
    </div>
    )
}

export default Contacts
