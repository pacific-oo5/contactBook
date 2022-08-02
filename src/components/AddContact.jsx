import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



const AddContact = ({handleClose, show, handleContacts}) => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [img, setImg] = useState("");
  let [id, setId] = useState("");
 
  const handleAdd = () => {
    if (!name.trim() || !phone.trim() || !img.trim() || !id.trim()) {
      alert("Заполните все поля");
      return;
    }
  }
  let newObj = {
    name,
    phone,
    img,
    id: Date.now(),
  }
  console.log(newObj);
  handleContacts(newObj);

  return (
    <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            add product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddContact;