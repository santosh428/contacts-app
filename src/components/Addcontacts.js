import React,{useState} from 'react'


const Addcontacts = (props) => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    
    const [namestatus,setNameStatus]=useState(false)
    const [emailstatus, setEmailstatus] = useState(false)


   const submitHandler = e=>{
      e.preventDefault()
      
      if(name === '' && email === ''){
        setNameStatus(true)
        setEmailstatus(true)
    }else{
      
      props.addContactHandler(name,email)
      props.history.push("/")
     }
     setName('')
      setEmail('')
  

    }
     
    return (
        <div className = "main">
        <div className = "main-form">
            <h5>Add contacts</h5>
            <div>
            <form onSubmit={submitHandler}>
                <input type ="text" placeholder ="Enter name"
                 value = {name} onChange = {e=>setName(e.target.value)}/><br/>
                 {namestatus && <p style = {{color:'red',fontSize:"10px"}}>please enter name</p>}
                <input type ="Email" placeholder ="Ex...xyz@gmail.com" 
                value = {email} onChange = {e=>setEmail(e.target.value)}/><br/>
                {emailstatus && <p style = {{color:'red',fontSize:"10px"}}>please enter Email</p>}
                
                <button>Add</button>
            </form>
            </div>
            </div>
              
             
            </div>
    )
}

export default Addcontacts
