import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{ children }</div>
    );
  }
}

Loading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Loading;
