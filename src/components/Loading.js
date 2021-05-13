import React, { Component } from 'react';
import '../style/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="spinner-1" />
        <p className="loading-text">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
