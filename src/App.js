import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './components/Routers';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
