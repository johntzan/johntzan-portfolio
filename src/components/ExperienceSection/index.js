import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import BindoLogo from "../../assets/images/experience/bindo-logo.png";
import RoziloLogo from "../../assets/images/experience/rozilo-logo.jpg";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Work Experience">
        <div className="row">
          <ExperienceUnit
            logo={RoziloLogo}
            colour="#FFFFFF"
            title="Software Developer - Rozilo Inc"
            timeperiod="April 2016 - July 2017"
            subtitle="Developing various Android and Web applications for clients, ranging from social media to
            business/shopping apps. Built and published shoe cleaning service applications that allow customers to photograph shoes
            and submit them to a cleaning service, with dedicated apps for the customer, delivery person,
            and cleaner."
            link="https://play.google.com/store/apps/details?id=com.rozilo.shooego.prod"
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
