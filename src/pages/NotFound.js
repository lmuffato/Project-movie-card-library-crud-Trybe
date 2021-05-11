import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="main-box">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin" />
        <div className="err2">4</div>
        <div data-testid="404-error" className="not-found">Página não encontrada</div>
      </div>
    );
  }
}

export default NotFound;
