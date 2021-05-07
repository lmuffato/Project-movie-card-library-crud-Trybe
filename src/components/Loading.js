import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{ children }</div>
    );
  }
}

export default Loading;
