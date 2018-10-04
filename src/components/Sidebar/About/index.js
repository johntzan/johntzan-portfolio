import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          Born and raised in NYC, I'm either building apps, playing soccer or
          relaxing on a beach somewhere warm. Currently freelancing with Upwork and privately. Available for both full-time or
          contract work. Shoot me an email if you're interested in working together.
        </div>
      </div>
    );
  }
}

export default About;
