import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavigationItem(props) {
  return (
    <li>
      <Link to={props.path}>
        <i className={props.icon}></i>
        <span className="text">{props.text}</span>
      </Link>
      <span className="tooltip">{props.tooltip}</span>
    </li>
  );
};

export default NavigationItem;
