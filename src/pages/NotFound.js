import React, { Component } from 'react';
import image from '../images/notFound.jpeg';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error">
        <img src={ image } alt="not found" />
      </div>
    );
  }
}

export default NotFound;
