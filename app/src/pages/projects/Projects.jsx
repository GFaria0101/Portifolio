import React, {Component} from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton.jsx";
import {Fade} from "react-awesome-reveal";
import {projectsHeader} from "../../portfolio.jsx";
import {projectcards} from "../../portfolio.jsx";
import {Card} from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.jsx";
import {Icon} from "@iconify/react";

class Projects extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="projects-main">
                <Header theme={theme}/>
                <div className="basic-projects">
                    <Fade direction={"up"} duration={2000} triggerOnce={true}>
                        <div className="projects-heading-div">
                            {/*<div className="projects-heading-img-div">*/}
                            {/*    <ProjectsImg theme={theme}/>*/}
                            {/*</div>*/}
                            <div className="projects-heading-text-div">
                                <h1
                                    className="projects-heading-text"
                                    style={{color: theme.orange}}
                                >
                                    {projectsHeader.title}
                                </h1>
                                <p
                                    className="projects-header-detail-text subTitle"
                                    style={{color: theme.text}}
                                >
                                    {projectsHeader["description"]}
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="repo-cards-div-main">
                    {/*<CardColumns>*/}
                    {projectcards.list.map((proj, index) => {
                        return (
                            <Card key={index} className="h-100">
                                <div style={{height: "150px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Card.Img
                                        variant="top"
                                        src={`assets/projects/${proj.img_path}`}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        <h2 style={{lineHeight: "1.5", marginTop: "0"}}>
                                            {proj.title}
                                            {proj.link && <a
                                                style={{color: theme.text}}
                                                href={proj.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon style={{
                                                    color: theme.text,
                                                    marginLeft: "10px",
                                                }} icon={
                                                    {body:'<path d="M4 12h16m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/>',width:24,height:24}
                                                }/>
                                            </a>}
                                            {proj.code && <a
                                                style={{color: theme.text}}
                                                href={proj.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span
                                                    aria-label="Ver código no GitHub"
                                                    style={{
                                                        color: theme.text,
                                                        paddingLeft: "10px",
                                                    }}
                                                >GitHub</span>
                                            </a>}
                                        </h2>
                                    </Card.Title>
                                    <Card.Title>
                                        <h4 style={{lineHeight: "1.5", marginTop: "0", color: theme.grayText}}>
                                            {proj.subTitle}
                                        </h4>
                                    </Card.Title>
                                    <div>
                                        {proj.tags.map((demo2, index) => {
                                            return (
                                                <Badge key={index}
                                                    style={{
                                                        marginRight: "0.5em",
                                                        backgroundColor: demo2.color,
                                                    }}
                                                >
                                                    {" "}
                                                    {demo2.lang}
                                                </Badge>
                                            );
                                        })}
                                    </div>
                                    <div
                                        className="text-center"
                                        style={{marginTop: "20px"}}
                                    ></div>
                                    <Card.Text>{proj.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                    {/*</CardColumns>*/}
                </div>
                <Footer theme={this.props.theme} onToggle={this.props.onToggle}/>
                <TopButton theme={this.props.theme}/>
            </div>
        );
    }
}

export default Projects;
