import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Actors() {
  const [actorsList, setActorsList] = useState([]);

  const getActor = () => {
    fetch("https://api.themoviedb.org/3/person/popular?api_key=d7f883f6d380f7e3c2ad35c7dab44528")
      .then((response) => response.json())
      .then((data) => setActorsList(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getActor();
  }, []);

  // console.log(actorsList);

  return (
    <div className="actors-container">
    <h1>Popular Actors</h1>
      {actorsList.map((actor) => (
        <div key={actor.id} className="actor-card">
          <Link to={`/actor/${actor.id}`}>
          <h2>{actor.name}</h2>
          </Link>
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
         
        </div>
      ))}
    </div>
  );
}

export default Actors;
