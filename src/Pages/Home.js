import React from 'react'
import Navbar from '../Components/Navbar';
import '../Components/Home.css'
import {Link, useNavigate} from 'react-router-dom'
import { MdPersonSearch } from "react-icons/md";



const Home = () => {
    // const navigate = useNavigate();
    
    
  return (
    
    <div>

            <Navbar></Navbar>
            <div className='employee-list'>
                <ul className='nav-header'>
                    <li>Employee List</li>
                    <li><input className='search-input' placeholder='Search Employes...'></input><MdPersonSearch /></li>
                    <li className='add-btn'><Link to="/Registration">Add</Link></li>
                </ul>
                
                <div className='flex-table'>
                <table className='table-content'>
                    <tr className='table-info'>
                        <th>ID.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Phone Number</th>
                        <th>Image</th>
                        <th><span>Action</span></th>
                        <th><span>Delete</span></th>
                    </tr>
                    <tr>
                        <td>
                            id:{" "}
                            {localStorage.getItem("name")
                            ? localStorage.getItem("name") : "NA"}
                        </td>
                        <td>
                        name:{" "}
                            {localStorage.getItem("name")
                            ? localStorage.getItem("name") : "NA"}
                        </td>
                        <td>
                        email:{" "}
                            {localStorage.getItem("email")
                            ? localStorage.getItem("email") : "NA"}
                        </td>
                        <td>
                        position:{" "}
                            {localStorage.getItem("position")
                            ? localStorage.getItem("position") : "NA"}
                        </td>
                        <td>
                        number:{" "}
                            {localStorage.getItem("number")
                            ? localStorage.getItem("number") : "NA"}
                        </td>
                        <td><img className='employee-profile'
                        src =
                        {localStorage.getItem("image")
                        ? localStorage.getItem("image") : "NA"}></img></td>
                        <td className='update-emp'><Link to="/Update">Update</Link></td>
                        <td><button className='delete-emp'>Delete</button></td>
                    </tr>
                </table>
                </div>
                
            </div>
            <div className='button'>
                 <button className='History-btn'> History</button>
            </div>
       
        
        
    </div>
  )
}

export default Home