import React from 'react'
import {useNavigate} from 'react-router-dom'
import { MdPersonSearch } from "react-icons/md";
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

    
  return (
    <div className='container'>
        
            <nav className='nav'>
                <ul>
                    <li className='reg'>Registration System</li>
                    <li><button className='logout' >Logout</button></li>
                    <li><img className='pic' src='registerIcon.png'></img></li>
                </ul>
            </nav>
            <div className='employee-list'>
                <ul className='nav-header'>
                    <li>Employee List</li>
                    <li><input className='search-input' placeholder='Search Employes...'></input><MdPersonSearch /></li>
                    <li><button className='add-btn'>Add</button></li>
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
                        <td>1</td>
                        <td>Edward Somo</td>
                        <td>Edward@gmail</td>
                        <td>COO</td>
                        <td>+27 67 759 7654</td>
                        <td><img className='employee-profile' src='prof.jpg'></img></td>
                        <td><button className='update-emp'>Update</button></td>
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