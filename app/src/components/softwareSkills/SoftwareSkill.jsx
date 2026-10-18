import React from "react";
import LocalIcon from "../LocalIcon.jsx";
import "./SoftwareSkill.css";

class SoftwareSkill extends React.Component {
    render() {
        return (
            <div>
                <div className="software-skills-main-div">
                    <ul className="dev-icons">
                        {this.props.logos.map((logo) => {
                            return (
                                <li key={logo.skillName} className="software-skill-inline"
                                    tabIndex={0} aria-label={logo.skillName}>
                                    <LocalIcon name={logo.fontAwesomeClassname} label={logo.skillName}/><span className="technology-tooltip" aria-hidden="true">{logo.skillName}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SoftwareSkill;
