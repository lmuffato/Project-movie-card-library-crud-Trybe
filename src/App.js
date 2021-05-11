import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </main>
  );
}

export default App;
