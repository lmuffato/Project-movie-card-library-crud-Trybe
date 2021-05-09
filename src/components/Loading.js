import React, { Component } from 'react';
import loading from './esquerda-direita.gif';

class Loading extends Component {
  render() {
    return (
      <div className="content-loading">
        <div className="loading-filho">
          <img width="200" className="gif-loading" src={ loading } alt="Gif loading" />
          <p className="loading-text">Carregando...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
