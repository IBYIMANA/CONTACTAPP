import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Home = () => {


  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [picture, setPicture] = useState("")


  const navigate = useNavigate();

  function addContact(e) {
    e.preventDefault();

    let newContact = { fullName, email, phone, picture };
    axios.post('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/add', newContact).then((res) => {
      console.log(res.data)
      navigate("/");
    }).catch((err) => {
      alert("create contact fail");

    })

  }




  return (
    <div className='flex flex-col items-center justify-center '>
      <form>
        <h1 className='mt-8 mb-4 font-bold text-1xl'>Add New</h1>
        <label>Full name</label><br></br>
        <input type="text" placeholder='Enter your names' className='h-12 pl-2 border-2 w-96'
          onChange={e => setFullName(e.target.value)}></input><br></br>


        <label>Email</label><br></br>
        <input type="text" placeholder='Enter your E-mail' className='h-12 pl-2 border-2 w-96'
          onChange={e => setEmail(e.target.value)}></input><br></br>

        <label>Phone</label><br></br>
        <input type="text" placeholder='Enter your Phone number' className='h-12 pl-2 border-2 w-96'
          onChange={e => setPhone(e.target.value)}></input><br></br>

        {/* <label for="Picture" className='mt-4'>Picture</label><br></br>
        <div className='flex flex-row items-center h-12 pl-2 mt-4 space-x-2 border-2 w-96'>
          <button className='px-2 py-1 bg-slate-200'>Choose File</button>
          <p>No file choosen</p>
        </div> */}
        <button className='h-12 mt-4 text-black border-2 w-96 bg-lime-500' onClick={addContact}>Create</button>
      </form>

    </div>
  )
}
