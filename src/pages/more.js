import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const More = (props) => {
  const [contact, setContact] = useState()

  let { contactId } = useParams();

  const fetchContact = (id) => {
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id)
      .then((resp) => {
        setContact(resp.data.contact);
      }).catch((error) => {
        console.log(error);
        alert("Failed to fetch contact");
      });
  };

  const deleteContact = (id) => {
    axios.delete( "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id)
    .then((resp) => {
        console.log(resp.data);
        fetchContact(); // To refresh the contacts list
        alert("successful deleted");
    })
    .catch((error) => {
        console.log(error);
        
    });
 };


  useEffect(() => {
    fetchContact(contactId);
  }, [contactId]);

  return (
    <div>
      <div className='flex flex-row justify-around mt-8'>
        <div>
          <h1 className='text-xl font-bold'>Marie Louise</h1>
          <p>Full names: {contact ? contact.fullName : "Not available"}</p>
          <p>E-mail: {contact ? contact.email : "Not available"}</p>
          <p>Phone: {contact ? contact.phone : "Not available"}</p>
          <p>Created on : {contact ? contact.createdAt : "Not available"}</p>
          <p>Created on : {contact ? contact.updatedAt : "Not available"}</p>
        </div>
        <div className='flex float-right gap-6 mt-4 space-x-4 sm:mt-0 sm:flex-row sm:items-center'>
        <button onClick={() => (`/update/${contact._id}`)} className= "block px-5 py-3 text-sm font-medium text-black transition rounded-lg bg-lime-400 hover:bg-gray-200 focus:outline-none focus:ring">Update</button>
          <button className='block px-5 py-3 text-sm font-medium text-black transition rounded-lg bg-lime-400 hover:bg-gray-200 focus:outline-none focus:ring'  onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
