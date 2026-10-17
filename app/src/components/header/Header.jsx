import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.jsx";
import SeoHeader from "../seoHeader/SeoHeader.jsx";
// import { Navbar } from "react-bootstrap";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.borderRadius = "5px"
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.borderRadius = "5px"
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";
    return (
      <Fade direction={"down"} duration={1000} triggerOnce={true}>
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span className="personal-logo" aria-label="Gabriel Faria">&lt;GF /&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Abrir menu" />
            <label className="menu-icon" htmlFor="menu-btn" aria-label="Abrir menu">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{backgroundColor: theme.body}}>
              <li>
                <NavLink
                    to="/home"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                    onMouseEnter={(event) => onMouseEnter(event, "lightGray")}
                    onMouseOut={(event) => onMouseOut(event)}
                >
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/about"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                    onMouseEnter={(event) => onMouseEnter(event, "lightGray")}
                    onMouseOut={(event) => onMouseOut(event)}
                >
                  Sobre mim
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/education"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                    onMouseEnter={(event) => onMouseEnter(event, "lightGray")}
                    onMouseOut={(event) => onMouseOut(event)}
                >
                  Experiência e Formação
                </NavLink>
              </li>
              <li></li>
              <li>
                <NavLink
                    to="/projects"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                    onMouseEnter={(event) => onMouseEnter(event, "lightGray")}
                    onMouseOut={(event) => onMouseOut(event)}
                >
                  Projetos
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/contact"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                    onMouseEnter={(event) => onMouseEnter(event, "lightGray")}
                    onMouseOut={(event) => onMouseOut(event)}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
