import {Container, Row, Col} from "react-bootstrap";
import Resumecontent from "./ResumeContent.jsx";
import {resumeleft, resumeright} from "../../portfolio.jsx";
import "./EducationComponent.css";
import React from "react";

export default function Resume() {
    return (
        <Container fluid className="resume-section">
            <Container>
                <Row className="resume">
                    <div className="heading-div2">
                        <Col md={6} className="resume-left">
                            {resumeleft.left.map((head) => {
                                return (
                                    <>
                                        <h1 className="resume-title">{head.title}</h1>
                                        {head.data.map((res) => {
                                            return (
                                                <Resumecontent
                                                    title={res.title}
                                                    subtitle={res.subtitle}
                                                    date={res.date}
                                                    content={res.content}
                                                    companies={res.companies}
                                                ></Resumecontent>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </Col>

                        <Col md={6} className="resume-right">
                            {resumeright.right.map((head) => {
                                return (
                                    <>
                                        <h3 className="resume-title">{head.title}</h3>
                                        {head.data.map((info) => {
                                            return (
                                                <Resumecontent
                                                    title={info.title}
                                                    subtitle={info.subtitle}
                                                    date={info.date}
                                                    content={info.content}
                                                    companies={info.companies}
                                                ></Resumecontent>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </Col>
                    </div>
                </Row>
            </Container>
        </Container>
    );
}
