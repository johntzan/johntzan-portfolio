import React, { Component } from "react";

import "../unit-style.scss";

class ExperienceUnit extends Component {
  render() {
    return (
      <div className="unit col-xs-12 col-sm-6">
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.logo})`,
            backgroundColor: this.props.colour
          }}
        />

        <div className="title bold">{this.props.title}</div>
        <div className="time-period">{this.props.timeperiod}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="subtitle">
          {this.props.link ? (
            <a href={this.props.link} target="_blank">
              Link to App in Play Store
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceUnit;
