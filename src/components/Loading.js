import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loadingComponent">
        <span className="spin" />
        <div>Carregando...</div>
      </div>
    );
  }
}

export default Loading;
