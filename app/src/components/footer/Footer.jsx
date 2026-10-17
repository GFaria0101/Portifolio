import {useLanguage} from '../../i18n.jsx';
import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../../portfolio.jsx";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const {t}=useLanguage();
  return (
    <div className="footer-div">
      {/*<Fade>*/}
        <p className="footer-text" style={{ color: props.theme.text }}>
          {greeting.sub} · {t('Portfólio profissional')}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      {/*</Fade>*/}
    </div>
  );
}
