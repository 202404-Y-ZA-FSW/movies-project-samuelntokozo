import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import logo from '../../assets/logo.png';
import caret_icon from '../../assets/caret_icon.svg';

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
        {/* Add your profile section or other links here */}
      </div>
    </div>
  );
};

export default Navbar;