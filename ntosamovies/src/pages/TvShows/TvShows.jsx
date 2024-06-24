// src/components/TvShowsDetails/TvShowDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASEURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd7f883f6d380f7e3c2ad35c7dab44528';
const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w500';

const TvShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`${API_BASEURL}tv/${id}`, {
          params: { api_key: API_KEY }
        });
        setShow(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchShowDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!show) {
    return <div>Oops! TV Show Not found...</div>;
  }

  return (
    <div className="tvshow-details">
      <h1>{show.name}</h1>
      <img src={`${IMAGE_BASEURL}${show.poster_path}`} alt={show.name} style={{ width: '300px', height: '450px', objectFit: 'cover' }} />
      <p><strong>Overview:</strong> {show.overview}</p>
      <p><strong>First Air Date:</strong> {show.first_air_date}</p>
      <p><strong>Rating:</strong> {show.vote_average}</p>
    </div>
  );
};

export default TvShowDetails;

