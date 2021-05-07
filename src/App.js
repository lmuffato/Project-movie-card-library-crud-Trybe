import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Content />
    </Router>
  );
}

export default App;
