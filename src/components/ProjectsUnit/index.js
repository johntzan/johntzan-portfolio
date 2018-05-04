import React, {Component} from "react";

import "../unit-style.scss";

class ProjectsUnit extends Component {
    render() {
        return (
            <div className="unit col-xs-12 col-sm-6 col-md-4">
                <a href={this.props.link} target="_blank">
                    <div
                        className="image"
                        style={{
                        backgroundImage: `url(${this.props.logo})`,
                        backgroundColor: this.props.colour
                    }}/>
                </a>
                <div className="title bold">{this.props.title}</div>
                <div className="time-period">{this.props.timeperiod}</div>
                <div className="subtitle">{this.props.subtitle}</div>
                <div className="subtitle">Tech: {this.props.tech}</div>
            </div>
        );
    }
}

export default ProjectsUnit;
