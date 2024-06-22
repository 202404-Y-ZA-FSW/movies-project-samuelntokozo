import React from 'react';

import Actors from './pages/Actors/Actors';


const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/actors/:id' element={<SingleActorsPage />} /> 
      </Routes>

  );
};

export default App;




