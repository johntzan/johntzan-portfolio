import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";
import "react-image-lightbox-universal/dist/umd/bundle.min.css"; // This only needs to be imported once in your app

import "./style.scss";
import EducationUnit from "../components/EducationUnit";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <div className="header">
        <h5>
          Hi, I'm
          <span className="bold">&nbsp;John Tzanidakis</span>
        </h5>

        <h3 className="bold">
          Mobile and Web Developer with 4+ years experience building Mobile apps
          with Android & React-Native and Full Stack Web apps with React,
          NodeJS, and Postgres.
        </h3>
      </div>

      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </div>
);

export default IndexPage;
