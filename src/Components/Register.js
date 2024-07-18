import React from 'react'
import './Register.css'

const Registration = () => {
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
            <form autoComplete='off' className='form-list'>
                <label>Name</label>
                <input type='text' required className='form-item'></input>
                <br></br>
                <label>Email</label>
                <input type='text' required className='form-item'></input>
                <br></br>
                <label>Phone Number</label>
                <input type='text' required className='form-item'></input>
                <br></br>
                <label>Image</label>
                <input type='file' id='upload' accept='/image' required className='form-item'></input>
                <br></br>
                <label>Position</label>
                <input type='text' required className='form-item'></input>
                <br></br>
                <label>ID</label>
                <input type='text' required className='form-item'></input>
                <br></br>
            </form>
            <button className='add-btn'>Register Employee </button>
        </div>
    </div>
  )
}

export default Registration