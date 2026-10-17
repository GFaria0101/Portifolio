import React from "react";

function ResumeContent(props) {
    return (
        <div className="resume-item">
            <h2 className={props.title ? "resume-title" : "resume-no-title"}>
                {props.title}
            </h2>
            <span className="date"><em>{props.date}</em></span>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", height: props.companies.length > 0 ? "60px" : "0"}}>
                {props.companies?.map((company) => {
                    return (
                        <>
                            <img src={"assets/companies/" + company} className="resume-logo" alt={""}/>
                        </>
                    );
                })
                }
            </div>
            <h6 className={props.title ? "resume-subtitle" : "resume-no-title"}>{props.subtitle}</h6>
            <p>

            </p>
            <ul>
                {props.content.map((value, index) => (
                    <li style={{wordWrap: "break-word"}} key={index}> ‣ {value}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResumeContent;
