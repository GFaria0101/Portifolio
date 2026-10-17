import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill.jsx";
import { skills } from "../../portfolio.jsx";
import { Fade } from "react-awesome-reveal";
import DataScienceImg from "./datascience/DataScienceImg.jsx";
import FullStackImg from "./web/FullStackImg.jsx";
import TeamLeadImg from "./teamLead/TeamLeadImg.jsx";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  return <TeamLeadImg theme={props.theme} />;
}

//animations taken from: https://lottiefiles.com/search?category=animations&q=website
//icons taken from: https://icon-sets.iconify.design

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div key={index} className="skills-main-div">
              <Fade direction={index %2 == 0 ? "right" : "left"} duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <div className="skills-text-div">
                <Fade direction={index %2 == 0 ? "left" : "right"} duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.blue }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade direction={index %2 == 0 ? "left" : "right"} duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade direction={index %2 == 0 ? "left" : "right"} duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index2) => {
                      return (
                        <p key={index2}
                          className="subTitle skills-text"
                          style={{ color: theme.text }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
