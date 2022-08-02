import React from 'react';
import ContactCard from './ContactCard';

const contactList = ({contacts, handleDelete, handleEdit}) => {
    return (
        <div>
       {contacts?.map((item)=>(
        <ContactCard item={item} key ={item.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
       ))}
        </div>
    );
};

export default contactList;