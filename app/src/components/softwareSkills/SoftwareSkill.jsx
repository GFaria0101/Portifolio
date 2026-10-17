import React from "react";
import LocalIcon from "../LocalIcon.jsx";
import "./SoftwareSkill.css";
import {Tooltip} from "react-tooltip";

class SoftwareSkill extends React.Component {
    render() {
        return (
            <div>
                <div className="software-skills-main-div">
                    <ul className="dev-icons">
                        {this.props.logos.map((logo) => {
                            return (
                                <li key={logo.skillName} className="software-skill-inline"
                                    data-tooltip-id="my-tooltip" data-tooltip-content={logo.skillName}
                                    name={logo.skillName}>
                                    <LocalIcon name={logo.fontAwesomeClassname}/>
                                </li>
                            );
                        })}
                    </ul>
                    <Tooltip id="my-tooltip" place={"top"} style={{ backgroundColor: "rgb(255,255,255)",
                        fontWeight: "bold", color: "#000000" }} />
                </div>
            </div>
        );
    }
}

export default SoftwareSkill;
