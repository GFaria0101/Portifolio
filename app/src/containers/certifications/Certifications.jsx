import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../portfolio.jsx";
import CertificationCard from "../../components/certificationCard/CertificationCard.jsx";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade direction={"up"} duration={2000} distance="20px" triggerOnce={true}>
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications &#38; Badges
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
