import React from 'react'
import Navbar from '../Components/Navbar'



const Update = () => {
  return (
    <div>
      <Navbar></Navbar>
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