import React, { useEffect,} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Login from './pages/Login/Login'; 
import Player from './pages/Player/Player';
import Actors from './pages/Actors/Actors';

import SingleActorsPage from './pages/SingleActorsPage/SingleActorsPage'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import TVShowsList from './pages/TvShows/TvShows';
import TVShowDetails from './components/TvShowsDetails/TvShowsDeatils';
import Movies from './pages/Movies/Movies'
// import SearchResults from './pages/SearchResults';



const App = () => {

  const navigate = useNavigate();

useEffect(()=>{
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("Logged In");
      navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login');
        }
        });
},[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/actors/:id' element={<SingleActorsPage />} /> 
        <Route path='/tvshows' element={<TVShowsList />} />
        <Route path='/tvshows/:id' element={<TVShowDetails />} />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path="/search" element={<SearchResults />} /> */}
        

      </Routes>
      </div>
  );
};

export default App;




