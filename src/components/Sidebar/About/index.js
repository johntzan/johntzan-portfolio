import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          Born and raised in NYC, I'm either building apps, playing soccer or
          relaxing on a beach somewhere warm. Available for both full-time or
          contract work.
        </div>
      </div>
    );
  }
}

export default About;
