import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          Born and raised in NYC, I'm either building apps, playing soccer or
          relaxing on a beach somewhere warm. Currently working remote full-time
          @ Syntx. Shoot me an email if you'd like to learn more about me or
          what we're working on.
        </div>
      </div>
    );
  }
}

export default About;
