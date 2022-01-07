import React,{useState,useEffect} from 'react'
import Addcontacts from './components/Addcontacts';
import './components/App.css';
import Contactlist from './components/Contactlist';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Specificcontact from './components/Specificcontact';
import axios from 'axios'
import Editcontact from './components/Editcontact';



function App() {

  const [contacts,Setcontacts] = useState([])

  const getContacts = async()=>{
       const response = await axios.get(`http://localhost:4000/contacts`)
       return response.data
  }


  const addContactHandler = async(name,email)=>{
      const contactItems = {name,email}
   
      const postData = {
        id:uuidv4(),...contactItems
        }
        const response = await axios.post(`http://localhost:4000/contacts`,postData)

      Setcontacts([...contacts,response.data])
      
  }
  
  const deleteContact = async (id)=>{

    await axios.delete(`http://localhost:4000/contacts/${id}`)
    const remainContacts = contacts.filter(contact=>{
      return contact.id !== id
    })
    Setcontacts(remainContacts)
  }
    
 useEffect(()=>{
  let getAllContacts = async()=>{
     let allContacts = await getContacts()
     Setcontacts(allContacts)
  }
  getAllContacts()
 },[])

  

  useEffect(()=>{

    // localStorage.setItem("contacts",JSON.stringify(contacts))

  },[contacts])

  const updateContactHandler= async(updatedcontact)=>{
    console.log(updatedcontact)
    let response = await axios.put(`http://localhost:4000/contacts/${updatedcontact.id}`,updatedcontact)
    console.log(response)
    const {id,name,email}=response.data
    Setcontacts(contacts.map(contact=>{
      return contact.id === id ? {...response.data} : contact
    }))
  }
  
  return (
    
      <div className="container">
        <Router>
      <Header/>
      <Switch>
      <Route path="/add" exact render = {(props)=><Addcontacts {...props} addContactHandler = {addContactHandler}/>}/>
      
      
      <Route path="/" exact>
      <Contactlist contacts={contacts} deleteContact={deleteContact}/>
      </Route>


      <Route path="/contact/:id" component={Specificcontact}/>
      <Route path="/edit" exact render = {(props)=><Editcontact {...props} updateContactHandler = {updateContactHandler}/>}/>
        
      

      </Switch>
      
      </Router>
      </div>
        
      
  );
}

export default App;
