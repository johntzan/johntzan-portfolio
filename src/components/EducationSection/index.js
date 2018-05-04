import React from "react";
import Section from "../Section";

import NyitLogo from "../../assets/images/experience/nyit-logo.jpg";
import EducationUnit from "../EducationUnit";

class EducationSection extends React.Component {
    render() {
        return (
            <Section title="Education">
                <div className="row">
                    <EducationUnit
                        logo={NyitLogo}
                        colour="#FFF"
                        title="Bachelor of Science - Computer Science - GPA: 3.35"
                        timeperiod="2011 - 2015"
                        activities="Men's Soccer Team - NCAA D2"
                        subtitle="Computer Science fundamentals, Java, HTML, CSS, Data Structures, Algorithms and Design, Databases, Network Security. "/>
                </div>
            </Section>
        );
    }
}

export default EducationSection;
