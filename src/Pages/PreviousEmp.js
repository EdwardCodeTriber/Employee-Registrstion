import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../Components/Home.css';
import { Link } from 'react-router-dom';
import { MdPersonSearch } from "react-icons/md";

const History = () => {
    // varables
    const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // store employees
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    // deleted employees
    const storedDeletedEmployees = JSON.parse(localStorage.getItem('deletedEmployees')) || [];
    setEmployees(storedEmployees);
    setDeletedEmployees(storedDeletedEmployees);
  }, []);

  const handleDelete = (id) => {
    const employeeToDelete = deletedEmployees.find(employee => employee.id === id);
    const updatedEmployees = deletedEmployees.filter(employee => employee.id !== id);
    const updatedDeletedEmployees = [...deletedEmployees, employeeToDelete];
    // Storing new data or updated data
    setEmployees(updatedEmployees);
    setDeletedEmployees(updatedDeletedEmployees);

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    localStorage.setItem('deletedEmployees', JSON.stringify(updatedDeletedEmployees));
  };

  // Filter employess by search
  const filteredEmployees = deletedEmployees.filter(employee => 
    employee.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className='employee-list'>
        <ul className='nav-header'>
          <li>Employee List</li>
          <li>
            {/* Search event function */}
            <input 
              className='search-input' 
              placeholder='Search Employees by ID...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <MdPersonSearch />
          </li>
          <li className='add-btn'><Link to="/Home">Back</Link></li>
        </ul>

        <div className='flex-table'>
          <table className='table-content'>
            <thead>
              <tr className='table-info'>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Phone Number</th>
                <th>Image</th>
                <th><span>Action</span></th>
                <th><span>Delete</span></th>
              </tr>
            </thead>
            <tbody>
                {/* pulls information from array to a TABLE  */}
              {filteredEmployees.map((deletedEmployees, index) => (
                <tr key={index}>
                  <td>{deletedEmployees.id}</td>
                  <td>{deletedEmployees.name}</td>
                  <td>{deletedEmployees.email}</td>
                  <td>{deletedEmployees.position}</td>
                  <td>{deletedEmployees.number}</td>
                  <td>
                    {deletedEmployees.image ? (
                      <img className='employee-profile' src={employee.image} alt="Employee" />
                    ) : "NA"}
                  </td>
                  <td className='update-emp'><Link to="/Update">Update</Link></td>
                  <td><button className='delete-emp' onClick={() => handleDelete(deletedEmployees.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='button'>
        <button className='History-btn'>History</button>
      </div>
    </div>
  );
}

export default History;
