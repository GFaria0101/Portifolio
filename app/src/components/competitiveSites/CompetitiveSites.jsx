import React from "react";
import "./CompetitiveSites.css";
import {Tooltip} from "react-tooltip";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
                <li key={logo.siteName} className="competitive-sites-inline"
                    data-tooltip-id="my-tooltip2" data-tooltip-content={logo.siteName}
                    name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    aria-label={logo.siteName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.siteName === 'LinkedIn' ? <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0077b5" d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5.2c0-1.3-.5-2-1.5-2s-1.5.7-1.5 2V19h-3V9h3v1.4c.5-.9 1.5-1.6 2.8-1.6 2.2 0 3.2 1.5 3.2 4.3Z"/></svg> : <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1 .8 2.1v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"/></svg>}
                  </a>
                </li>
            );
          })}
        </ul>
          <Tooltip id="my-tooltip2" style={{ backgroundColor: "rgb(255,255,255)",
              fontWeight: "bold", color: "#000000" }} />
      </div>
    );
  }
}

export default CompetitiveSites;
