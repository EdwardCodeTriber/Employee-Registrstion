import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';

const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();
    //default admin login credentials
    const userName = localStorage.getItem('email') ? localStorage.getItem('email') : 'admin@admin1.com'
    const userPassword = localStorage.getItem('password') ? localStorage.getItem('password') : 'admin1'
    //
    const handleSubmit= (e) => {
        e.preventDefault();
        if(email === userName && password === userPassword){
            // alert("Correct Credentials")
            navigate('/Home')
        }else{
            alert=("Incorrect details");
        }
    }


  return (
    <div>
        
        <div className='form-container'>
            <form className='form-list'>
            <label>UserName</label>
                <input type='email' required className='form-item' 
                value={email} onChange={e => setEmail(e.target.value)}></input>
                <br></br>
                <label>Password</label>
                <input type='text' required className='form-item' 
                value={password} onChange={e => setPassword(e.target.value)}></input>
            </form>
            <button type='submit' className='login-btn' onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login