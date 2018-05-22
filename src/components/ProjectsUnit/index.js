import React, { Component } from "react";

import "../unit-style.scss";
import Lightbox from "react-image-lightbox";
class ProjectsUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {}

  openLightbox() {
    this.setState({ isOpen: true });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.screenshots;

    return (
      <div className="unit col-xs-12 col-sm-6">
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <a onClick={this.openLightbox}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour,
              borderWidth: 20,
              borderColor: this.props.colour
            }}
          />
        </a>
        <div className="title bold">{this.props.title}</div>
        <div className="time-period">{this.props.timeperiod}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="subtitle">
          {this.props.github !== null ? (
            <a target="_blank" href={this.props.github}>
              View Code
            </a>
          ) : (
            "Code available on request."
          )}
        </div>
        {this.props.link !== null && (
          <div className="subtitle">
            <a target="_blank" href={this.props.link}>
              Live Here
            </a>
          </div>
        )}
        <div className="subtitle">
          <a
            onClick={this.openLightbox}
            style={{
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            View Screenshots
          </a>
        </div>
        <div className="subtitle">Tech: {this.props.tech}</div>
      </div>
    );
  }
}

export default ProjectsUnit;
