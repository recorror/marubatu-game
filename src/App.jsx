import React from 'react';
import Home from './screen/Home';
import Game from './screen/Game';
import Stage from './screen/Stage';
import Finish from './screen/finish/Finish';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Stage" element={<Stage />} />
      <Route path="/Finish" element={<Finish />} />
    </Routes>
  );
}

export default App;