import React from "react";
import Section from "../Section";
import ProjectsUnit from "../ProjectsUnit";

import theRestaurantCommunityLogo from "../../assets/images/projects/the-restaurant-community-logo.png";
import futStatsAppLogo from "../../assets/images/projects/fut-stats-android-logo.png";
import futStatsWeb from "../../assets/images/projects/fut-stats-web.png";
import bingeReportLogo from "../../assets/images/projects/binge-report-logo.png";
import leftoverwatchLogo from "../../assets/images/projects/leftover-watch-logo.png";
import postcardsawayLogo from "../../assets/images/projects/postcardsaway-logo.png";

import bingereportScreenshot from "../../assets/images/projects/screenshots/full-bingereport.png";
import leftoverwatchScreenshot from "../../assets/images/projects/screenshots/full-leftoverwatch.png";
import postcardsawayScreenshot from "../../assets/images/projects/screenshots/full-postcardsaway.png";
import theRestaurantCommunityScreenshot from "../../assets/images/projects/screenshots/therestaurantcom.png";
import futStatsAndroidScreenshot from "../../assets/images/projects/screenshots/fut-stats.png";
import futStatsWebScreenshot1 from "../../assets/images/projects/screenshots/fut-stats-web-2.png";
import futStatsWebScreenshot2 from "../../assets/images/projects/screenshots/fut-stats-web1.png";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects & Work">
        <div className="row">
        <ProjectsUnit
            logo={postcardsawayLogo}
            screenshots={[postcardsawayScreenshot]}
            colour="#e1e1e1"
            github={null}
            title="PostCardsAway"
            link={"https://play.google.com/store/apps/details?id=com.postcardsaway"}
            timeperiod="August 2018 - Present"
            subtitle="Native Android App built for client to replicate current iOS app. App functionality: Take pictures/Select from gallery, edit and send as a photo postcard to one of your recipients."
            tech="Android, Firebase Storage/Database, Realm Local DB, Retrofit, RxJava, Camera, Photo Editing, Stripe Payments, Google Pay"
          />
           <ProjectsUnit
            logo={leftoverwatchLogo}
            screenshots={[leftoverwatchScreenshot]}
            colour="#617087"
            github={null}
            title="Leftover Watch"
            link={"https://play.google.com/store/apps/details?id=com.jjinc.LeftoverWatch"}
            timeperiod="July 2018 - Present"
            subtitle="NodeJS Server for push notifications to user, Android App developed to mirror iOS app functionality. Admin Dashboard page built with React"
            tech="Android, NodeJS Server & API, Firebase Notifications/Database, React, Google Play Subscriptions"
          />
          <ProjectsUnit
            logo={bingeReportLogo}
            screenshots={[bingereportScreenshot]}
            colour="#0d1e2f"
            github={null}
            title="Binge Report"
            link={null}
            timeperiod="May 2018 - Present"
            subtitle="This project involved developing a React Native Mobile app that replicates a Web app built with React by a client. "
            tech="React Native, Redux"
          />
          <ProjectsUnit
            logo={theRestaurantCommunityLogo}
            screenshots={[theRestaurantCommunityScreenshot]}
            colour="#3598dbff"
            github={null}
            title="The Restaurant Community"
            link="https://play.google.com/store/apps/details?id=com.therestaurantcommunity"
            timeperiod="Jan 2018 - Present"
            subtitle="A “Waze” for restaurant owners and managers to report the location of the health department."
            tech="React Native, Redux, Firebase, NodeJS"
          />
          <ProjectsUnit
            logo={futStatsAppLogo}
            screenshots={[futStatsAndroidScreenshot]}
            colour="#1a1f21"
            title="FUT Stats & Leaderboards"
            github="https://github.com/johntzan/FutWeekendLeagueStats"
            link="https://play.google.com/store/apps/details?id=com.weekendleague.stats.prod"
            timeperiod="January 2017 - present"
            subtitle="App for entering and maintaining in-game stats and leaderboards from video game franchise
            FIFA by EA Sports"
            tech="Android (Java), Backend-NodeJS"
          />
          <ProjectsUnit
            logo={futStatsWeb}
            screenshots={[futStatsWebScreenshot2, futStatsWebScreenshot1]}
            colour="#1a1f21"
            title="FUT Stats  Web"
            github="https://github.com/johntzan/Fut-Stats-Web"
            link="https://fut-stats.firebaseapp.com"
            timeperiod="December 2017 - present"
            subtitle="Web App for entering and maintaining in-game stats from video game franchise
            FIFA by EA Sports"
            tech="ReactJS, Firebase"
          />
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
