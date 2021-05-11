import React, { Component } from 'react';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Index</h1>
      </div>
    );
  }
}

export { default as EditMovie } from './EditMovie';
export { default as MovieDetails } from './MovieDetails';
export { default as MovieList } from './MovieList';
export { default as NewMovie } from './NewMovie';
export { default as NotFound } from './NotFound';
