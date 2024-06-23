import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';






const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [movieOptions, setMovieOptions] = useState([
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Popular', value: 'popular' },
    { label: 'Latest', value: 'latest' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Upcoming', value: 'upcoming' },
  ]);
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7f883f6d380f7e3c2ad35c7dab44528')
      .then(response => {
        setGenres(response.data.genres);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // implement search logic here, e.g. make API call to search endpoint
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li> <Link className="link-a" to='/Movies'>Movies</Link></li>
          <li> <Link className="link-a" to='/TV Shows'>TV Shows</Link></li>
          <li>Genres</li>
          <li> <Link className="link-a" to='/actors'>Actors</Link></li>
          <li><input type="search" placeholder='Search...' className='input' /> </li>
        </ul>
        </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <img src={profile_img} alt="profile" className='profile' />
          <img src={caret_icon} alt="profile" />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
              
