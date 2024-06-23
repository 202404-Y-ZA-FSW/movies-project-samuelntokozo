import React from 'react';
import './Movie.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({});
  const [actors, setActors] = React.useState([]);
  const [relatedMovies, setRelatedMovies] = React.useState([]);
  const [trailer, setTrailer] = React.useState('');
  const [productionCompany, setProductionCompany] = React.useState({});

  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d7f883f6d380f7e3c2ad35c7dab44528`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d7f883f6d380f7e3c2ad35c7dab44528`)
      .then(response => {
        setActors(response.data.cast.slice(0, 5));
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d7f883f6d380f7e3c2ad35c7dab44528`)
      .then(response => {
        setRelatedMovies(response.data.results.slice(0, 5));
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d7f883f6d380f7e3c2ad35c7dab44528`)
      .then(response => {
        setTrailer(response.data.results[0].key);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/production_companies?api_key=d7f883f6d380f7e3c2ad35c7dab44528`)
      .then(response => {
        setProductionCompany(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="movie-page">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Language: {movie.original_language}</p>
        <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
        <p>Director: {movie.director}</p>
        <p>Overview: {movie.overview}</p>
      </div>
      <div className="credits">
        <h2>Main Actors:</h2>
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <Link to={`/actor/${actor.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                <span>{actor.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="related-movies">
        <h2>Related Movies:</h2>
        <ul>
          {relatedMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="trailer">
        <h2>Trailer:</h2>
        <YouTube videoId={trailer} />
      </div>
      <div className="production-company">
        <h2>Production Company:</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${productionCompany.logo_path}`} alt={productionCompany.name} />
        <span>{productionCompany.name}</span>
      </div>
    </div>
  );
};

export default Movie;