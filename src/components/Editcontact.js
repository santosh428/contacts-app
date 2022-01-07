import React, { Component } from 'react'


export default class Editcontact extends Component {
    
    constructor(props) {
        super(props)

        // console.log(props)
        const{id,name,email}= props.location.state.contact;
    
        this.state = {
            id,
            name,
            email
             
        }
    }

    submitContactHandler  = e=>{
        e.preventDefault()
         this.props.updateContactHandler(this.state)
         this.setState({name:"",email:""})
         this.props.history.push("/")
    }
    

    render() {
        return (
       <div className = "main">
        <div className = "main-form">
            <h5>Update contact</h5>
            <div>
            <form onSubmit={this.submitContactHandler}>
                <input type ="text" placeholder ="Enter name"
                 value = {this.state.name} onChange = {e=>{this.setState({name:e.target.value})}}/><br/>
                 
                <input type ="Email" placeholder ="Ex...xyz@gmail.com" 
                value = {this.state.email} onChange = {e=>{this.setState({email:e.target.value})}}/><br/>
                
                
                <button>Update</button>
            </form>
            </div>
            </div>
            </div>
        )
    }
}
