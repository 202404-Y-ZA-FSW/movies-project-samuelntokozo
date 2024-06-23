import React, { useEffect,} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Login from './pages/Login/Login'; 
import Player from './pages/Player/Player';
import Actors from './pages/Actors/Actors';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SingleActorsPage from './pages/Actors/SingleActorsPage';


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
        {/* <Route path='/actors/:id' element={<SingleActorsPage />} /> */}
      </Routes>
      </div>
  );
};

export default App;




