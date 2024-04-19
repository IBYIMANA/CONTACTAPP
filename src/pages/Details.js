import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';


export const Details = (props) => {
  const navigate = useNavigate();
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
          <h1 className='text-xl font-bold'>PERSON INFORMATION</h1>
          <p>Full names: {contact ? contact.fullName : "Not available"}</p>
          <p>E-mail: {contact ? contact.email : "Not available"}</p>
          <p>Phone: {contact ? contact.phone : "Not available"}</p>
          <p>Created on : {contact ? contact.createdAt : "Not available"}</p>
          <p>Created on : {contact ? contact.updatedAt : "Not available"}</p>
        </div>
        <div className='space-x-4 '>
        <button onClick={() => navigate(`/update/${contact._id}`)} className="px-6 py-3 text-base text-white transition duration-300 rounded-lg bg-lime-500">Update</button>
          <button className='px-6 py-3 text-white rounded-lg bg-lime-500'  onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Details;