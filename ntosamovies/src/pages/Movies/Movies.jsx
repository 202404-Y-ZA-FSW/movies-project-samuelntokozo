import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=d7f883f6d380f7e3c2ad35c7dab44528"
        );
        setMovies(response.data.results);
      } catch (error) {
        setError("Error fetching movies");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : movie.overview}
                </p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;