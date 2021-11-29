import React from "react";
import PropTypes from "prop-types";
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

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default NavigationItem;
