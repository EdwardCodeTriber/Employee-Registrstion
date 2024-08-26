import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
// import './Login.css'

const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        Username: "",
        email: "",
        password: "",
    });
    /// to store
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input))
        navigate("/Login");
    };

  return (
    <div>
        <nav >
            <ul>
                <li className='reg'>Registration System</li>
                <li><img className='pic' src='registerIcon.png'></img></li>
            </ul>
        </nav>
        <div className='form-container'>
            <form className='form-list' onSubmit={handleSubmit}>
            <label>UserName</label>
                <input 
                //Pass a value from input
                Username="Username"
                value={input.Username}
                onChange={(e) => setInput({...input, [e.target.Username] : e.target.value})}
                type='text' required className='form-item' placeholder='Username...'></input>
                <br></br>
                <label>Email</label>
                <input 
                //Pass a value from input
                email="email"
                value={input.Username}
                onChange={(e) => setInput({...input, [e.target.email] : e.target.value})}
                
                type='email' required className='form-item' placeholder='Email...'></input>
                <br></br>
                <label>Password</label>
                <input 
                //Pass a value from input
                password="password"
                value={input.password}
                onChange={(e) => setInput({...input, [e.target.password] : e.target.value})}
                type='text' required className='form-item' placeholder='Password...'></input>
            </form>
            <button className='login-btn'>Register</button>
        </div>
    </div>
  )
}

export default Register