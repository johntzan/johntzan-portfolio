import React, {Component} from 'react'

import './style.scss'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image"></div>
        <div className="bio">
          Born and raised in NYC, I'm either building apps, playing soccer or relaxing on
          a beach somewhere warm. Drop me a line to find out which one.
        </div>
      </div>
    )
  }
}

export default About