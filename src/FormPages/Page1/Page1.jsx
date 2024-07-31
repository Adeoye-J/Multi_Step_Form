import React, { useContext, useState } from 'react'
import "./Page1.css"
import { Link } from 'react-router-dom'
import { FormContext } from '../../Context/FormContext'

const Page1 = () => {
    const {name, setName} = useContext(FormContext)
    const {email, setEmail} = useContext(FormContext)
    const [navigate, setNavigate] = useState(true)

    const handleFormInput = () => {
        // if (!(name && email)) {
        //     alert("Fill in your Name and Email please")
        // } else {
            setNavigate(true)
        // }
    }

    return (
        <div className='page1'>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form className="form-input">
                <label htmlFor='name'>Name</label>
                <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email Address</label>
                <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="number">Phone Number</label>
                <input type="tel" name="" id="number" required />
            </form>
            <Link to={navigate && "/page2"}><button onClick={handleFormInput}>Next Step</button></Link>
        </div>
    )
}

export default Page1