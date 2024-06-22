import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Genres</li>
       <li><Link className="link-a" to='/actors'>Actors</Link></li>
          <li><input type="search" placeholder='Search...' className='input' /> </li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* <input type="search" placeholder='Search...' /> */}
        <div className="navbar-profile">
          <img src={profile_img} alt="profile" className='profile' />
          <img src={caret_icon} alt="profile" />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
