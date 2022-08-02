
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const contactCard = ({item, handleDelete, handleEdit}) => {
  console.log(item)
  return (
    <div>
       <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.id}</Card.Text>
        <Card.Text>{item.phone}</Card.Text>
        <Button variant="secondary" onClick={()=>handleEdit(item.id)} >Edit</Button>
        <Button variant="dark" onClick={()=>handleDelete(item.id)}>Delete</Button>
      </Card.Body>
    </Card>

    </div>
  );
};

export default contactCard;