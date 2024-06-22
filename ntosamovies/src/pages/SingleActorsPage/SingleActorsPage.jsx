import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorDetails = async () => {
      const apiKey = "d7f883f6d380f7e3c2ad35c7dab44528";

      try {
        // Fetch actor details
        const actorResponse = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`);
        const actorData = await actorResponse.json();
        setActor(actorData);

        // Fetch actor's movie credits
        const moviesResponse = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`);
        const moviesData = await moviesResponse.json();
        setMovies(moviesData.cast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="actor-details">
    <p>Actor Details</p>
      <h1>{actor.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
      <p><strong>Gender:</strong> {actor.gender === 1 ? "Female" : "Male"}</p>
      <p><strong>Popularity:</strong> {actor.popularity}</p>
      <p><strong>Birthday:</strong> {actor.birthday}</p>
      <p><strong>Biography:</strong> {actor.biography}</p>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title} ({movie.release_date})</li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetails;

