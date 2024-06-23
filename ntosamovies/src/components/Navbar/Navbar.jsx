

import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: 'd7f883f6d380f7e3c2ad35c7dab44528',
          }
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const movieOptions = [
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Popular', value: 'popular' },
    { label: 'Latest', value: 'latest' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = encodeURIComponent(searchTerm.trim());
      navigate(`/search?query=${query}`);
    }
  };


const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    // Fetching genres from the API
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7f883f6d380f7e3c2ad35c7dab44528')
     .then(response => {
        setGenres(response.data.genres);
      })
     .catch(error => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  const movieOptions = [
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Popular', value: 'popular' },
    { label: 'Latest', value: 'latest' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = encodeURIComponent(searchTerm.trim());
      navigate(`/search?query=${query}`); // Use navigate instead of history.push
    }
  };



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
        <Link to='/' className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
          <li><Link className="link-a" to='/'>Home</Link></li>
          <li className="dropdown">
            Movies
            <img src={caret_icon} alt="dropdown" className="caret-icon" />
            <div className="dropdown-content">
              {movieOptions.map(option => (
                <Link key={option.value} to={`/movies/${option.value}`} className="link-a">
                  {option.label}
                </Link>
              ))}
            </div>
          </li>
          <li className="dropdown">
            Genres
            <img src={caret_icon} alt="dropdown" className="caret-icon" />
            <div className="dropdown-content">
              {genres.map(genre => (
                <Link key={genre.id} to={`/genre/${genre.id}`} className="link-a">
                  {genre.name}
                </Link>
              ))}
            </div>
          </li>
          <li><Link className="link-a" to='/actors'>Actors</Link></li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </li>
        </ul>

        </div>
      <div className="navbar-right">
       
      </div>

      </div>
      {/* 
        <div className="navbar-right">
          Add your profile section or other links here
        </div>
      */}

    </div>
  );
};


export default Navbar;
        


