import React, { Component } from "react";
import Lottie from "react-lottie";

class DisplayLottie extends Component {
  render() {
    const { animationPath } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      path: animationPath,
    };

    return <Lottie options={defaultOptions} />;
  }
}

export default DisplayLottie;
