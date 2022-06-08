import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import NewPirate from './Components/NewPirate';
import OnePirate from './Components/OnePirate';


function App() {

  const [pirates,setPirates] = useState([]);

  const deletePirate =(idFromHomePage)=>{setPirates(pirates.filter(pirate=>pirate._id !== idFromHomePage))};

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/pirates" element={<Homepage pirates={pirates} setPirates={setPirates} deletePirate={deletePirate}/>}/>
          <Route path="/pirate/new" element={<NewPirate pirates={pirates} setPirates={setPirates}/>}/>
          <Route path="/pirate/:pirateId" element={<OnePirate/>}/>
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
