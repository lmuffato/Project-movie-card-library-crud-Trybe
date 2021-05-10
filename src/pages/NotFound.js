import React, { Component } from 'react';
import '../bulma.min.css';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" className="hero is-fullheight">
        <h1 className="title hero-body">Página não encontrada</h1>
      </div>
    );
  }
}

export default NotFound;
