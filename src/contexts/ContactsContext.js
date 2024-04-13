import React, { createContext, useState } from 'react'

const ContactsContext = createContext({
    contacts: []
});

export const ContactsContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            fullName: "Ibyimana fillette",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        },
        {
            id: 2,
            fullName: "Mbabazi Alpha",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        },
        {
            id: 3,
            fullName: "Usanase Sndrine",
            profile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        }
    ]);
    const addContact = (newContact) => {
        // Add a new contact
        setContacts ([...contacts, newContact]) ;
        
    }
    const updateContact = (prevContactId, newContactDetails) => {
        // Update a contact
    }
    const deleteContact = (index) => {
        // Delete a contact
        if(index >= 0 && index < contacts.length){
            setContacts(contacts.filter((c, ind) => ind !== index))
        }

        console.log("Deleted contact: " + index);
        
    }


    return (
        <ContactsContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContext;