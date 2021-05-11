import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div>
        <img src="http://www.sudburycatholicschools.ca/wp-content/plugins/3d-flip-book/assets/images/dark-loader.gif" alt="carregando" />
        <p>Carregando...</p>
      </div>
    );
  }
}

export default Loading;
