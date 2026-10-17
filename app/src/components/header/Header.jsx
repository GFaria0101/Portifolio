import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import SeoHeader from "../seoHeader/SeoHeader.jsx";
// import { Navbar } from "react-bootstrap";

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
            <ThemeToggle/>
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
