import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {  
    const [apiData, setApiData] =useState([]);
    const cardsRef = useRef ();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2Y4ODNmNmQzODBmN2UzYzJhZDM1YzdkYWI0NDUyOCIsInN1YiI6IjY2NmM0MTI0NmUzMThlZTU5Yjc2NDk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W2CfHW4EigW8-PpZhc4NSLAhebLvve31Xv6X0iYM--s'
      }
    };
    
  

const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
}

useEffect (()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on NtosaMovies"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
            return <div className="card" key={index}>
                <img src={ `https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt={card.title} />
                <p>{card.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
