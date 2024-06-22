import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from  './pages/Login/Login'
import Player from './pages/Player/Player';

import Actors from './pages/Actors/Actors';
import SingleActorsPage from './pages/SingleActorsPage/SingleActorsPage'


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/actors' element={<Actors />} />
        <Route path='/actors/:id' element={<SingleActorsPage />} />
      </Routes>
       <Footer/>
    </Router> 
  
  );
};

export default App;


