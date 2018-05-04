import React from "react";
import Section from "../Section";
import ProjectsUnit from "../ProjectsUnit";

import theRestaurantCommunityLogo from "../../assets/images/projects/the-restaurant-community-logo.png";
import futStatsAppLogo from "../../assets/images/projects/fut-stats-android-logo.png";
import futStatsWeb from "../../assets/images/projects/fut-stats-web.png";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ProjectsUnit
            logo={theRestaurantCommunityLogo}
            colour="#3598dbff"
            title="The Restaurant Community"
            link="https://play.google.com/store/apps/details?id=com.therestaurantcommunity"
            timeperiod="Jan 2018 - Present"
            subtitle="A “Waze” for restaurant owners and managers to report the location of the health department."
            tech="React Native, Redux, Firebase, NodeJS"/>
          <ProjectsUnit
            logo={futStatsAppLogo}
            colour="#1a1f21"
            title="FUT Stats & Leaderboards"
            link="https://play.google.com/store/apps/details?id=com.weekendleague.stats.prod"
            timeperiod="January 2017 - present"
            subtitle="App for entering and maintaining in-game stats and leaderboards from video game franchise
            FIFA by EA Sports"
            tech="Android (Java), Backend-NodeJS"/>
          <ProjectsUnit
            logo={futStatsWeb}
            colour="#1a1f21"
            title="FUT Stats  Web"
            link="https://fut-stats.firebaseapp.com"
            timeperiod="December 2017 - present"
            subtitle="Web App for entering and maintaining in-game stats from video game franchise
            FIFA by EA Sports"
            tech="ReactJS, Firebase"/>
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
