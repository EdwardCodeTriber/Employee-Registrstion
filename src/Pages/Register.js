import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Components/Register.css';

const Registration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState('');
  const [position, setPosition] = useState('');
  const [id, setID] = useState('');

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Name required");
    } else if (email === "") {
      alert("Email required");
    } else if (number === "") {
      alert("Number required");
    } else if (image === "") {
      alert("Image required");
    } else if (position === "") {
      alert("Position required");
    } else {
      const newEmployee = {
        name,
        email,
        number,
        image,
        position,
        id,
      };
      const updatedEmployees = [...employees, newEmployee];
      setEmployees(updatedEmployees);
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      alert("Added Successfully");
      navigate('/Home');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Employee Registrations</h1>
      <div className='form-container'>
        <form autoComplete='off' className='form-list' onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type='text' required className='form-item' placeholder='Name...'
            value={name} onChange={e => setName(e.target.value)}
          />
          <br />
          <label>Email</label>
          <input 
            type='email' required className='form-item' placeholder='Email...'
            value={email} onChange={e => setEmail(e.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <input 
            type='number' required className='form-item' placeholder='Phone Number...'
            value={number} onChange={e => setNumber(e.target.value)}
          />
          <br />
          <label>Image</label>
          <input 
            type='file' id='upload' accept='image/*' required className='form-item' placeholder='Image...'
            onChange={e => setImage(e.target.files[0])}
          />
          <br />
          <label>Position</label>
          <input 
            type='text' required className='form-item' placeholder='Position...'
            value={position} onChange={e => setPosition(e.target.value)}
          />
          <br />
          <label>ID</label>
          <input 
            type='text' required className='form-item'
            value={id} onChange={e => setID(e.target.value)}
          />
          <br />
          <button type='submit' className='add-btn'>Register Employee</button>
          <br />
          <Link to="/Home">Cancel</Link>
        </form>
      </div>
      
    </div>
  );
}

export default Registration;
