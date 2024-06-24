import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState({
    popular: [],
    upcoming: [],
    now_playing: []
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responsePopular = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: 'your_api_key_here'
          }
        });
        const responseUpcoming = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
          params: {
            api_key: 'your_api_key_here'
          }
        });
        const responseNowPlaying = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: 'your_api_key_here'
          }
        });

        setMovies({
          popular: responsePopular.data.results,
          upcoming: responseUpcoming.data.results,
          now_playing: responseNowPlaying.data.results
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, 
            a young man living in modern Istanbul embarks on a 
            quest to save the city from an imortal enemy.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt=""/>Watch Now</button>
            </div>
        </div>
      </div>

     {/*<div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on NtosaMovies"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div> *}


      {/* Display TitleCards for different movie categories */}
      <TitleCards title={"Only on NtosaMovies"} category={"popular"}>
        {movies.popular.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </TitleCards>

      <TitleCards title={"Upcoming"} category={"upcoming"}>
        {movies.upcoming.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </TitleCards>

      <TitleCards title={"Top Picks for You"} category={"now_playing"}>
        {movies.now_playing.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </TitleCards>
    </div>
  );
};

export default Home;
