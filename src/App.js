import React from 'react';
import Login from './components/Login';
import Spotify from './components/Spotify';
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/spotify' element={<Spotify />} />
      </Routes>
    </div>
  )
}

export default App