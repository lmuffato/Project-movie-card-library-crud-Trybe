import React from 'react';
import { Link, Route, BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
// import { Link, Route, BrowserRouter, Router } from 'react-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <nav>
        <ul>
          <Router />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <Route />
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default App;
