import React, { Component } from 'react';
import ExperienceElement from './experience_element';

export default class Experience extends Component {
  render() {
    return (
        <div>
          <ExperienceElement
            company="Capital One" 
            position="Software Engineering Intern"
            img="/disrupt.png"
            tags={["Python","JavaScript", "Flask", "React", "Docker", "Nginx", "Git"]}
            description={["Supported the AutoCruise team, developing a product to create and maintain AWS infrastructure to deploy Docker containers",
              "Independently developed a maintainable full stack application to streamline and validate the process of onboarding onto our application",
              "Created a responsive user-centered front-end using React",
              "Built a multi-purpose RESTful API Backend using Flask, and Swagger for documentation",
              "Dockerized the full stack application for production with Nginx, Gunicorn/Flask, and React containers",
              "Resulted in an estimated 25-30% team-wide reduction in time spent with customer service"
            ]}
            />
          <ExperienceElement
            company="Leidos" 
            position="Software Engineering Intern"
            img="/ATC.png"
            tags={["C","CVS"]}
            description={[
              "Supported the Micro-EARTS Air Traffic Control engineering organization",
              "Developed, tested, and delivered a solution to a software issue which impacted Air Traffic Controller displays",
              "Prototyped and documented a new feature for the Micro-EARTS program, allowing Air Traffic Controllers to display electronic notes with text editor like capabilities",
              "Discovered an issue within currently deployed code, and designed a solution",
              "Gained experience with the software development process and enhanced proficiency in C and version control (CVS)"
            ]}
            />
          <ExperienceElement
            company="Biochemistry Research"
            position="Undergraduate Researcher"
            img="/biochem.png"
            tags={["Java", "Git"]}
            description = {[
              "Developed programs using Java to help analyze and organize data into easy to understand spreadsheets for future publication"
            ]}
          />
        </div>
    );
  }
}
