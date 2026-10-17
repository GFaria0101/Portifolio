import React from 'react';
import {NavLink} from 'react-router-dom';
import './Button.css';
export default function Button({text,className,href,newTab}) {
 return <div className={className}><NavLink className="main-button" to={href} target={newTab?'_blank':undefined} rel={newTab?'noopener noreferrer':undefined}>{text}</NavLink></div>;
}
