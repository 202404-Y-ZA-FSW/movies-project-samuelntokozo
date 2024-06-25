import { Link } from 'react-router-dom';
import React, { useState,useEffect,useNavigate } from 'react'
import axios from 'axios';

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: 'd7f883f6d380f7e3c2ad35c7dab44528',
          },
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

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchTerm || !searchTerm.trim()) {
      return;
    }

    setError(null);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
        params: {
          api_key: 'd7f883f6d380f7e3c2ad35c7dab44528',
          query: searchTerm.trim()
        }
      });
      
      if (response.status !== 200) {
        throw new Error(`Failed to fetch search results: ${response.status}`);
      }
      
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResultsClick = () => {
    setSearchResults([]);
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
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <div className='search-results'>
              {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                  <div key={movie.id} onClick={handleResultsClick}>
                    {movie.title || movie.name}
                  </div>
                ))
              ) : (
                <div>No results found.</div>
              )}
            </div>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
