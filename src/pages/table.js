
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
export const Table = () => {
    const [contacts, setContacts] = useState([])

    const fetchContact = () => {

        axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list').then((res) => {
            setContacts(res.data.contacts)
        }).catch((err) => {
            console.log(err);
            alert("Fetching contacts failed");
        });
    }

  
    useEffect(() => {
        fetchContact();
    }, []);

  
    return (
        <div className='flex flex-col items-center'>
            <button className='px-2 py-1 mt-4 mb-4 font-bold text-black bg-lime-500' ><Link to="/home">Add New</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                       
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (contacts !== null) ? contacts.map((contact, index) => {
                            return <tr key={index}>
                                <td>{contact.fullName}</td>
                                <td><img src="{contact.profile} " alt="" /></td>
                                <td className='space-x-2'>
                                    <button className='px-2 py-1 mt-4 font-bold text-black bg-lime-500'>
                                        <Link to={`/details/${contact._id}`}>details</Link>
                                    </button>
                                    
                                    <button className='px-2 py-1 mt-4 font-bold text-white bg-black'>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        }) : "No contacts found!"
                    }
                </tbody>
            </table >

        </div >
    )
}