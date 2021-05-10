import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        Carregando...
      </div>
    );
  }
}

export default Loading;
