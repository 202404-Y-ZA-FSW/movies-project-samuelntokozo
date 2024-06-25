import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Player from './pages/Player/Player';
import Actors from './pages/Actors/Actors';
import Footer from './components/Footer/Footer';
import SingleActorsPage from './pages/SingleActorsPage/SingleActorsPage'; 
import TvShowsList from './pages/TvShows/TvShows';
import TvShowsDetails from './components/TvShowsDetails/TvShowsDeatils'; 
import Movies from './pages/Movies/Movies';

const App = () => {
  return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/player/:id' element={<Player />} />
            <Route path='/actors' element={<Actors />} />
            <Route path='/actors/:id' element={<SingleActorsPage />} />
            <Route path='/tvshows' element={<TvShowsList />} />
            <Route path='/tvshows/:id' element={<TvShowsDetails />} />
            <Route path='/movies' element={<Movies />} />
            {/* <Route path="/search" element={<SearchResults />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
  );
};

export default App;






