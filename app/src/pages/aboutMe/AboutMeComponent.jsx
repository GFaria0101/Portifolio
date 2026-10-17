import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import "./aboutMe.css";
import {Fade} from "react-awesome-reveal";
import AboutMeImg from "./AboutMeImg.jsx";
import SkillsSet from "./SkillsSet.jsx";
import {hobbies, idioms, languages, softSkills} from "../../portfolio.jsx";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill.jsx";

class AboutMeComponent extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={"about-main"}>
                <Header theme={theme}/>
                <div className="basic-about">
                    <Fade direction={"up"} duration={2000} triggerOnce={true}>
                        <div className="heading-div-about">
                            {/*<div className="heading-img-div-about">*/}
                            {/*    <AboutMeImg theme={theme}/>*/}
                            {/*</div>*/}
                            <div className="heading-text-div-about">
                                <h1 className="heading-text-about" style={{color: theme.orange}}>
                                    Sobre mim
                                </h1>
                                <p className="heading-sub-text-about" style={{color: theme.text}}>
                                    <b>Competências técnicas e profissionais</b>
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <div className={"heading-div-about2"}>
                        <div>
                            <h3>Sistemas, aplicações e dados</h3><div className="soft-skills"><span>Windows Server · Linux · Active Directory</span><span>Microsoft 365 · Intune · MECM/SCCM</span><span>SQL Server · MySQL · PostgreSQL · MongoDB</span><span>Java · JavaScript · REST APIs · Kafka</span></div>
                        </div>
                        <div>
                            <div>
                                <h3>Competências profissionais</h3>
                                <div className="soft-skills">
                                    {softSkills.map((s, index) => <span key={index}>{s}</span>)}
                                </div>
                            </div>
                            <h3>Automação e operações</h3><div className="soft-skills"><span>PowerShell · Bash · Python · Ansible</span><span>Dynatrace · Zabbix</span><span>AWS · Azure · Docker · Kubernetes · OpenShift</span><span>Jenkins · Git · Terraform · CI/CD</span></div>
                        </div>
                    </div>
                </div>
                <Footer theme={this.props.theme}/>
                <TopButton theme={this.props.theme}/>
            </div>)
    }
}

export default AboutMeComponent;