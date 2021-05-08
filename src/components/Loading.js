import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor() {
    super();

    this.renderLoading = this.renderLoading.bind(this);
  }

  renderLoading() {
    const { show } = this.props;
    if (show === true) {
      return <div>Carregando...</div>;
    }
    return '';
  }

  render() {
    return (
      this.renderLoading()
    );
  }
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Loading;
