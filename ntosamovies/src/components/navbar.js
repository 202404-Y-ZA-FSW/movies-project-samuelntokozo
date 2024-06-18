import React from 'react';
import '../App.css'; // Your CSS file

function navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="movie-icon">🎬</span> 
        Movies
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <button className="search-button">Q</button>
      </div>
      <div className="date-time">
        02-Oct-2023 | 04:09 AM
      </div>
      <div className="user-profile">
        {/* Avatar or profile icon */}
        <img src="user-avatar.png" alt="User Profile" /> 
      </div>
    </nav>
  );
}

export default navbar;
