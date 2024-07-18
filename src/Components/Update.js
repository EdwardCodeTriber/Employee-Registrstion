import React from 'react'
import './Update.css'
import './Home.css'


const Update = () => {
  return (
    <div>
      <div className='nav'>
            <nav>
            <ul>
                <li className='reg'>Registration System</li>
                <li><button className='logout'>Logout</button></li>
                <li><img className='pic' src='registerIcon.png'></img></li>
            </ul>
            </nav>
        </div>
        <h1>Employee Update</h1>
        <div className='form-container'>
            <form autoComplete='off' className='form-list'>
                <label>Name</label>
                <input type='text' required className='form-update'></input>
                <br></br>
                <label>Email</label>
                <input type='text' required className='form-update'></input>
                <br></br>
                <label>Phone Number</label>
                <input type='text' required className='form-update'></input>
                <br></br>
                <label>Image</label>
                <input type='text' required className='form-update'></input>
                <br></br>
                <label>Position</label>
                <input type='file' id='update' accept='/image' required className='form-update'></input>
                <br></br>
                <label>ID</label>
                <input type='text' required className='form-updatitem'></input>
                <br></br>
            </form>
            <button className='update-btn'>Update </button>
          </div>

    </div>
  )
}

export default Update