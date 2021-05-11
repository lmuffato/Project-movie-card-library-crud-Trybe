import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from './components/index';

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
