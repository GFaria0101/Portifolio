import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import Button from "../../components/button/Button.jsx";
import AddressImg from "./AddressImg.jsx";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import {competitiveSites, contactPageData} from "../../portfolio.jsx";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";

const ContactData = contactPageData.contactSection;
class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade direction={"up"} duration={1000} triggerOnce={true}>
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.orange }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {ContactData["description"]}
                </p>
                <CompetitiveSites logos={competitiveSites.competitiveSites}/>
                <div className="resume-btn-div"><a className="main-button" href="https://github.com/GFaria0101" target="_blank" rel="noopener noreferrer">Visitar GitHub</a></div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
export default Contact;
