import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TVShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link to={`/tv-shows/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVShowsList;
