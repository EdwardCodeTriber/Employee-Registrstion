import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Register.css'

const Registration = () => {
    // const navigate = useNavigate()

    // const [input, setInput] = useState({
    //     name: "",
    //     email: "",
    //     PhoneNumber: "",
    //     Image:"",
    //     Position: "",
    //     ID: "",
    // });
    // /// to store
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem("Employee", JSON.stringify(input))
    //     navigate("/Home");
    // };
  return (
    <div>
        <div className='nav'>
            <nav>
                <ul>
                    <li>Registration System</li>
                    <li><button className='logout'>Logout</button></li>
                    <li><img className='pic' src='registerIcon.png'></img></li>
                </ul>
            </nav>
        </div>    
        <h1>Employee Registrations</h1>
        <div className='form-container'>
        
            <form autoComplete='off' className='form-list' >
                <label>Name</label>
                <input 
                
                type='text' required className='form-item' placeholder='Name...'></input>
                <br></br>
                <label>Email</label>
                <input 
                
                type='email' required className='form-item' placeholder='Email...'></input>
                <br></br>
                <label>Phone Number</label>
                <input 
                
                type='number' required className='form-item' placeholder='Phone Number...'></input>
                <br></br>
                <label>Image</label>
                <input 
                
                type='file' id='upload' accept='/image' required className='form-item' placeholder='Image...'></input>
                <br></br>
                <label>Position</label>
                <input 
                
                type='text' required className='form-item' placeholder='Position...'></input>
                <br></br>
                <label>ID</label>
                <input 
                
                type='text' required className='form-item'></input>
                <br></br>
            </form>
            <button type='submit' className='add-btn'>Register Employee </button>
        </div>
    </div>
  )
}

export default Registration