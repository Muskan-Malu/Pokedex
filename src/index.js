import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokeDetails } from './components/pokedexDetailCard/PokeDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Battle } from './components/SurpriseMe/Battle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokeDetails/:name" element={<PokeDetails />} />
        <Route path="/surpriseMe" element={<Battle />} />
      </Routes>
    </Router>
  </React.StrictMode>
);