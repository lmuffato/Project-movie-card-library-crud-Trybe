import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>{ loading }</div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.string.isRequired,
};

export default Loading;
