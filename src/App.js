import React from 'react';
import './App.css';
import FlavDataDisplay from './components/Flavanoids.js';
import GammaDataDisplay from './components/Gamma.js';

function App() {
  return (
    <div className='container'>
      <FlavDataDisplay />
      <GammaDataDisplay />
    </div>
  )
}

export default App;
