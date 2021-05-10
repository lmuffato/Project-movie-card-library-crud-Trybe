import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <>
        <img src="http://www.sudburycatholicschools.ca/wp-content/plugins/3d-flip-book/assets/images/dark-loader.gif" alt="carregando" />
        <div>Carregando...</div>
      </>
    );
  }
}

export default Loading;
