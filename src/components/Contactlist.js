import React from 'react'
import Contacts from './Contacts'
import { Link } from 'react-router-dom'

const Contactlist = (props) => {
    
    return (
        <div className = "contact-div">
            <div className = "contact-div-header">
            <h3>Contact List</h3>
            <Link to='/add'><button>Add Contact</button></Link>
            </div>

            {props.contacts.map((contact)=>{
                return <Contacts key={contact.id} contact={contact} deleteContact={props.deleteContact}/>
            })}
        </div>
    )
}

export default Contactlist
