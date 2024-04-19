import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const params = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [contact, setContact] = useState({});
  // Fetch data
  useEffect(() => {
    axios.get(`https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=${params.contactId}`)
      .then(response => {
        setContact(response.data.contact);
      })
      .catch(err => { console.error(err);})
  }, [params.contactId])
  // Function to update contact
  const updateContact = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    axios.put(`https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/update?id=${params.contactId}`, contact)
    .then(response => {
      if (response.status === 200) {
        setMessage(response.data.message);
        setContact(response.data.contact);
        setTimeout(() => {
          setMessage('');
          navigate(`/details/${response.data.contact._id}`);
        }, 3000);
      }
    })
    .catch(err => {
      setError(err);
      console.error(err);
    })
  }
  const handleInputs = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-md mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-md">
        <div className="p-4">
          <form onSubmit={updateContact} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="font-semibold">Full name</label>
              <input
                type="text"
                name="fullName"
                required
                value={contact.fullName || ''}
                id="fullName"
                onChange={handleInputs}
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={contact.email || ''}
                id="email"
                onChange={handleInputs}
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold">Phone</label>
              <input
                type="number"
                name="phone"
                minLength={10}
                maxLength={10}
                required
                value={contact.phone || ''}
                id="phone"
                onChange={handleInputs}
                className="p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button type="submit" className="px-6 py-3 mt-5 text-base text-white transition duration-300 bg-gray-700 rounded-lg hover:bg-lime-400">Update</button>
            {message && <p className="p-3 text-black bg-green-400 rounded-lg">{message}</p>}
            {error && <p className="p-3 text-red-900 bg-red-200 rounded-lg">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}