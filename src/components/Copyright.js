import React, { Component } from 'react';

const threeSeconds = 3000;

class Copyright extends Component {
  constructor() {
    super();
    this.state = {
      timeOut: false,
    };
    this.renderCoptyright = this.renderCoptyright.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
  }

  componentDidMount() {
    this.renderCoptyright();
  }

  renderCoptyright() {
    setTimeout(() => {
      this.setState({ timeOut: true });
    }, threeSeconds);
  }

  renderDiv() {
    return (
      <>
        <p className="copyright">© Copyright Stans 2021. All rights reserved</p>
        <a
          className="github"
          id="link-github"
          href="https://github.com/3011stan"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-alt" aria-hidden="true" />
        </a>
      </>
    );
  }

  render() {
    const { timeOut } = this.state;
    return !timeOut ? <span /> : this.renderDiv();
  }
}

export default Copyright;
