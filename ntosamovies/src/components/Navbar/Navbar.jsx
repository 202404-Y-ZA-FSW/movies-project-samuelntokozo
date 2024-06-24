import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import React, {useState,useEffect,useNavigate} from 'react'
import axios from 'axios';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Genres</li>
       <li><Link className="link-a" to='/actors'>Actors</Link></li>
          <li><input type="search" placeholder='Search...' className='input' /> </li>
        </ul>
      </div>
     

    </div>
  )
}

export default Navbar
