import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './components/Routers';

function App() {
  return (
    <BrowserRouter>
      <Routers />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
