import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
                <ul>
                    <li className='reg'>Registration System</li>
                    <li className='logout'><Link to="/"> Logout</Link></li>
                    <li><img className='pic' src='registerIcon.png'></img></li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar