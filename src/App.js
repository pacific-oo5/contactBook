import React, {useState} from 'react';
import ContactList from "./components/ContactList"

import AddContact from "./components/AddContact"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditContacts from './components/EditContacts';


const App = () => {

  // Мод  // Модалка для добавления
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // сoстояние для общего массива с продуктами
  const [contacts, setContacts] = useState([]);
  // console.log(contacts);

  const handleContacts = (newObj) => {
    let newContacrs = [...contacts];
    newContacrs.push(newObj);
    setContacts(newContacrs);
  }
  // edit
  const [editModal, setEditModal] = useState(false);
  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);


  const handleDelete = (id) => {
    let newContacts= contacts.filter((item)=> item.id !== id)
    setContacts(newContacts)
  }

  const [editContacts, setEditContacts] = useState({})
  const handleEdit =(id)=>{
    let obj = contacts.filter((item)=> item.id === id)
    handleEditShow()
    setEditContacts(obj[0])
  }
 const handleSave = (obj) => {
  let newContacts = contacts.map((item)=>{
    if (item.id===obj.id){
      return obj
    }
    return item
  })
  setContacts(newContacts)
  handleEditClose()
 }

    return (
    <div>
      <Header handleShow={handleShow}/>
      <AddContact handleClose={handleClose} show={show} handleContacts={handleContacts}/>
      <ContactList contacts={contacts}  handleDelete={handleDelete} handleEdit={handleEdit} editContacts={editContacts}/>{editModal&&<EditContacts  handleContacts={handleContacts} editModal={editModal} handleEditClose={handleEditClose} handleEditShow={handleEditShow} handleSave={handleSave}/>}
  
    </div>
  ); 
};

export default App;