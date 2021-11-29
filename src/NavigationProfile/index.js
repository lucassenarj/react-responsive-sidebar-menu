import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function NavigationProfile(props) {
  return (
    <li className="user">
      <div className="user-details">
        <img src={props.avatar} alt={props.name} />
        <div className="info">
          <div className="name">{ props.name }</div>
          <div className="status">{props.status}</div>
        </div>
      </div>
      <button onClick={() => props.onLogout()}>
        <i className="bx bx-log-out" id="log_out"></i>
      </button>
    </li>
  );
};

NavigationProfile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default NavigationProfile;
