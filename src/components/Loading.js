import React, { Component } from 'react';

const loading = 'Loading...';
class Loading extends Component {
  render() {
    return (
      <div className="loading-page">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">{loading}</span>
        </div>
      </div>
    );
  }
}

export default Loading;
