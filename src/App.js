import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </main>
  );
}

export default App;
