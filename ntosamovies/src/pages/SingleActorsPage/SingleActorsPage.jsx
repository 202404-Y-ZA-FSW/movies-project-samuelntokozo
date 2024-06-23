import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASEURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd7f883f6d380f7e3c2ad35c7dab44528';
const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w500';

function ActorDetails() {
  const { id } = useParams(); // useParams returns an object with the route parameters, destructure the id property
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        // Fetch actor details
        const response = await axios.get(`${API_BASEURL}person/${id}`, {
          params: {
            api_key: API_KEY
          }
        });
        const moviesResponse = await axios.get(`${API_BASEURL}person/${id}/movie_credits`, {
          params: {
            api_key: API_KEY
          }
        });
        setActor({ ...response.data, movies: moviesResponse.data.cast });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!actor) {
    return <div>Oopse Actor Not found...</div>;
  }

  return (
    <div className="actor-details">
      <p>Actor Details:</p>
      <h1>{actor.name}</h1>
      <img src={`${IMAGE_BASEURL}${actor.profile_path}`} alt={actor.name} style={{ width: '300px', height: '450px', objectFit: 'cover' }} />
      <p><strong>Gender:</strong> {actor.gender === 1 ? "Female" : "Male"}</p>
      <p><strong>Popularity:</strong> {actor.popularity}</p>
      <p><strong>Birthday:</strong> {actor.birthday}</p>
      <p><strong>Biography:</strong> {actor.biography}</p>
      <h2>Movies</h2>
      <div className="movies">
        {actor.movies.map(movie => (
          <div key={movie.id} className="movie">
            <p>{movie.title}</p>
            {movie.poster_path && (
              <img src={`${IMAGE_BASEURL}${movie.poster_path}`} alt={movie.title} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActorDetails;