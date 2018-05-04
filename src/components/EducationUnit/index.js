import React, {Component} from "react";

import "../unit-style.scss";

class EducationUnit extends Component {
    render() {
        return (
            <div className="unit col-xs-12">
                <div
                    className="image"
                    style={{
                    backgroundImage: `url(${this.props.logo})`,
                    backgroundColor: this.props.colour,
                    width: '33%'
                }}/>
                <div className="title bold">{this.props.title}</div>
                <div className="time-period">{this.props.timeperiod}</div>
                <div className="subtitle">{this.props.subtitle}</div>
                <div className="subtitle">{this.props.activities}</div>
            </div>
        );
    }
}

export default EducationUnit;
