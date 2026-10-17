import {LanguageContext} from '../../i18n.jsx';
import LanguageSelect from './LanguageSelect.jsx';
import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import SeoHeader from "../seoHeader/SeoHeader.jsx";
// import { Navbar } from "react-bootstrap";

class Header extends Component {
  static contextType=LanguageContext;
  render() {
    const {t}=this.context;
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
            <div className="header-controls"><LanguageSelect/><ThemeToggle/></div>
            <input className="menu-btn" type="checkbox" id="menu-btn" aria-label={t('Abrir menu')} />
            <label className="menu-icon" htmlFor="menu-btn" aria-label={t('Abrir menu')}>
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
                  {t('Início')}
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/about"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                >
                  {t('Sobre mim')}
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/education"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                >
                  {t('Experiência e Formação')}
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
                  {t('Projetos')}
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/contact"
                    tag={Link}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={{color: theme.text}}
                >
                  {t('Contacto')}
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
