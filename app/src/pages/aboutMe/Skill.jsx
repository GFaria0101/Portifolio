import React from "react";
import "./aboutMe.css";

export default function Skill(props) {
    return (
        <div className={"skills"}>
            <span style={{width: "100px"}}>{props.skill.name}</span>
            <div className={props.skill.value >= 1 ? "skill-circle-painted" : "skill-circle"}/>
            <div className={props.skill.value >= 2 ? "skill-circle-painted" : "skill-circle"}/>
            <div className={props.skill.value >= 3 ? "skill-circle-painted" : "skill-circle"}/>
            <div className={props.skill.value >= 4 ? "skill-circle-painted" : "skill-circle"}/>
            <div className={props.skill.value >= 5 ? "skill-circle-painted" : "skill-circle"}/>
        </div>
    );
}