import {LanguageContext} from '../../i18n.jsx';
import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
// import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications.jsx";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";
import EducationImg from "./EducationImg.jsx";
import { competitiveSites } from "../../portfolio.jsx";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";
import Resume from "./Resume.jsx";

class Education extends Component {
  static contextType=LanguageContext;
  render() {
    const {t}=this.context;
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade direction={"up"} duration={2000} triggerOnce={true}>
            <div className="heading-div">
              {/*<div className="heading-img-div">*/}
              {/*  <EducationImg theme={theme} />*/}
              {/*</div>*/}
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.orange }}>
                  {t('Experiência e Formação')}
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  {t('Percurso profissional e formação académica')}
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Resume />
          
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
