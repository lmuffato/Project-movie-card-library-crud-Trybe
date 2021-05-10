import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyPages from './components/MyPages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyPages />
      </BrowserRouter>
    );
  }
}

export default App;
