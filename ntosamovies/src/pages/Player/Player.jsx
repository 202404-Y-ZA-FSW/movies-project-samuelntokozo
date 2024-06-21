import React, { useState, useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorisation : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDFhMzczODEyNzU0ZDg1M2RmN2ZiYjY2M2VkODAzNiIsInN1YiI6IjY2NzA3MDkwN2MxNWEwOWM3ODU0N2ZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EsLoL6WKNo8md7yB7kPsJtxkiMr4lsUYoJjP3kk43yI' 
    }
  };

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));

  },[])

  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" />
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} trailer='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className='player-info'>
          <p>apiData.published_at</p>
          <p>apiData.name</p>
          <p>apiDate.type</p>
        </div>
    </div>
  )
}

export default Player
