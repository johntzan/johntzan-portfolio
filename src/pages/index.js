import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";
import EducationUnit from "../components/EducationUnit";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <div className="header">
        <h5>
          Hi, I'm
          <span className="bold">
            &nbsp;John Tzanidakis</span>
        </h5>

        <h3 className="bold">
          Mobile and Web Developer with 2 years experience building mobile apps with
          Android & React-Native and Full Stack Web apps with React, Redux, NodeJS, and
          Angular.
        </h3>
      </div>

      <ProjectsSection/>
      <ExperienceSection/>
      <EducationSection/>
    </div>

    <div className="aside">
      <div className="top">
        <About/>
      </div>
      <div className="bottom">
        <Links/>
      </div>
    </div>
  </div>
);

export default IndexPage;
