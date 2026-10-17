import React from "react";
import {blackTheme, lightTheme} from "../../theme";
import "./Button.css";
import {NavLink} from "react-router-dom"

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  theme = lightTheme;
  return (
    <div className={className}>
      <NavLink
          className="main-button"
        to={href}
        target={newTab && "_blank"}
        style={{
          color: theme.text,
          backgroundColor: theme.blue,
          border: `solid 0px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.body, theme.blue)}
        onMouseOut={(event) => onMouseOut(event, theme.text, theme.blue)}
      >
        {text}
      </NavLink >
    </div>
  );
}
