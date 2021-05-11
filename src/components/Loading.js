import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="container">
        <div className="loading" />
        <div>Carregando...</div>
      </div>
    );
  }
}

export default Loading;
