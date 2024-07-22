import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import '../Components/Register.css'


const Registration = () => {
    const navigate = useNavigate()

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[number, setNumber] = useState('');
    const[image, setImage] = useState('');
    const[position, setPosition] = useState('');
    const[id, setID] = useState('');

    const handleSubmit= (e) => {
      e.preventDefault();
       if(name === ""){
        alert("Name required")
       }else if(email === ""){
        alert("email required")
       }else if(number === ""){
        alert("number required")
       }else if(image === ""){
        alert("Image required")
       }else if(position === ""){
        alert("Position required")
       }else{
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('number', number)
        localStorage.setItem('image', image)
        localStorage.setItem('position', position)
        localStorage.setItem('id', id)
        alert("Added Successfully")
        navigate('/Home')
        
       }
    }


    
  return (
    <div>
        <Navbar></Navbar>  
        <h1>Employee Registrations</h1>
        <div className='form-container'>
        
            <form autoComplete='off' className='form-list' >
                <label>Name</label>
                <input 
                type='text' required className='form-item' placeholder='Name...'
                value={name} onChange={e => setName(e.target.value)}></input>
                <br></br>
                <label>Email</label>
                <input                 
                type='email' required className='form-item' placeholder='Email...'
                value={email} onChange={e => setEmail(e.target.value)}></input>
                <br></br>
                <label>Phone Number</label>
                <input                
                type='number' required className='form-item' placeholder='Phone Number...'
                value={number} onChange={e => setNumber(e.target.value)}></input>
                <br></br>
                <label>Image</label>
                <input                
                type='file' id='upload' accept='/image' required className='form-item' placeholder='Image...'
                value={image} onChange={e => setImage(e.target.value)}></input>
                <br></br>
                <label>Position</label>
                <input                 
                type='text' required className='form-item' placeholder='Position...'
                value={position} onChange={e => setPosition(e.target.value)}></input>
                <br></br>
                <label>ID</label>
                <input                
                type='text' required className='form-item'
                value={id} onChange={e => setID(e.target.value)}></input>
                <br></br>
            </form>
            <button type='submit' className='add-btn' onClick={handleSubmit}>Register Employee </button>
        </div>
    </div>
  )
}

export default Registration