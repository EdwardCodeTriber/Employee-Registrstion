import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    number: '',
    image: '',
    position: '',
    id: ''
  });

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeToUpdate = storedEmployees.find(emp => emp.id === id);
    if (employeeToUpdate) {
      setEmployee(employeeToUpdate);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // initialisation
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = storedEmployees.map(emp => emp.id === id ? employee : emp);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    alert("Updated Succesfully");
    navigate('/Home');
  };

  return (
    <div>
      <Navbar />
      <h1>Employee Update</h1>
      <div className='form-container'>
        <form autoComplete='off' className='form-list' onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type='text' 
            name='name' 
            value={employee.name} 
            onChange={handleChange} 
            required 
            className='form-update' 
          />
          <br />
          <label>Email</label>
          <input 
            type='email' 
            name='email' 
            value={employee.email} 
            onChange={handleChange} 
            required 
            className='form-update' 
          />
          <br />
          <label>Phone Number</label>
          <input 
            type='text' 
            name='number' 
            value={employee.number} 
            onChange={handleChange} 
            required 
            className='form-update' 
          />
          <br />
          <label>Image</label>
          <input 
            type='file' 
            id='update' 
            accept='image/*' 
            onChange={e => setEmployee(prevState => ({ ...prevState, image: e.target.files[0] }))}
            className='form-update' 
          />
          <br />
          <label>Position</label>
          <input 
            type='text' 
            name='position' 
            value={employee.position} 
            onChange={handleChange} 
            required 
            className='form-update' 
          />
          <br />
          <label>ID</label>
          <input 
            type='text' 
            name='id' 
            value={employee.id} 
            onChange={handleChange} 
            required 
            className='form-update' 
          />
          <br />
          <button type='submit' className='add-btn'>Update</button>
          
          <br />
          <Link to="/Home">Cancel</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
