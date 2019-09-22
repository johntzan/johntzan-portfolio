import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import BindoLogo from "../../assets/images/experience/bindo-logo.png";
import RoziloLogo from "../../assets/images/experience/rozilo-logo.jpg";
import SyntxLogo from "../../assets/images/experience/syntx-logo.png";
import UpworkLogo from "../../assets/images/experience/upwork-logo.png";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Work Experience">
        <div className="row">
          <ExperienceUnit
            logo={SyntxLogo}
            colour="#FFFFFF"
            title="Full Stack Software Engineer - Syntx"
            timeperiod="January 2019 - present"
            subtitle="Full stack Web Development with Node, Postgres & React, Mobile App Development with React Native, iOS & Android"
          />
          <ExperienceUnit
            logo={UpworkLogo}
            colour="rgb(242, 242, 242)"
            title="Freelance Software Engineer - Upwork"
            timeperiod="January 2018 - December 2018"
            subtitle="React Native Mobile Apps, Android Native Apps, Full stack React/Node/Firebase apps."
          />
          <ExperienceUnit
            logo={RoziloLogo}
            colour="#FFFFFF"
            title="Software Developer - Rozilo Inc"
            timeperiod="April 2016 - July 2017"
            subtitle="Developing various Android and Web applications for clients, ranging from social media to
            business/shopping apps. Built and published shoe cleaning service applications that allow customers to photograph shoes
            and submit them to a cleaning service, with dedicated apps for the customer, delivery person,
            and cleaner."
          />
          <ExperienceUnit
            logo={BindoLogo}
            colour="#FFFFFF"
            title="Android Dev Intern - Bindo Labs"
            timeperiod="Nov 2014 - April 2015"
            subtitle="Developing various android apps from start to store release, Learning new languages and applying to projects. Mainly developing a signup Android App for service provided."
          />
        </div>
      </Section>
    );
  }
}

export default ExperienceSection;
