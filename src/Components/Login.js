import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div>
        <nav >
            <ul>
                <li className='reg'>Registration System</li>
                <li><img className='pic' src='registerIcon.png'></img></li>
            </ul>
        </nav>
        <div className='form-container'>
            <form className='form-list'>
            <label>UserName</label>
                <input type='text' required className='form-item'></input>
                <br></br>
                <label>Password</label>
                <input type='text' required className='form-item'></input>
            </form>
            <button className='login-btn'>Login</button>
        </div>
    </div>
  )
}

export default Login