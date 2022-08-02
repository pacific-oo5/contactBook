import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditContacts = ({ editModal, handleEditClose, editContacts, handleSave}) => {
    const [contacts, setContacts] = useState(editContacts)
    console.log(contacts)
    const editName = (e) => {
        let newObj = {
            ...contacts,
            name: e.target.value,
        }
        setContacts(newObj)
    }
    const editPhone = (e) => {
        let newObj = {
            ...contacts,
            phone: e.target.value,
        }
        setContacts(newObj)
    }
    const editImg = (e) => {
        let newObj = {
            ...contacts,
            img: e.target.value,
        }
        setContacts(newObj)
    }
    const editId = (e) => {
        let newObj = {
            ...contacts,
            id: e.target.value,
        }
        setContacts(newObj)
    }
    
    return (
        <Modal show={editModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <Form.Control
              size="lg"
              type="text"
              placeholder="name"
              value={contacts.name}
              onChange={editName}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="Phone"
              value={contacts.phone}
              onChange={editPhone}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="img"
              value={contacts.img}
              onChange={editImg}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="is"
              value={contacts.id}
              onChange={editId}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick ={()=> handleSave(contacts)}>
            Save Contacts
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default EditContacts;