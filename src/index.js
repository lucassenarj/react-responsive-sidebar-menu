import React, { Component } from "react";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem";
import NavigationProfile from "./NavigationProfile";
import "./style.css";

class ResponsiveSidebar extends Component {
  state = {
    open: false,
  };

  render() {
    const { menuItems, options, user } = this.props;
    const { open } = this.state;
    return (
      <div className={`sidebar ${open ? "open" : ""} `}>
        <div className="header">
          {
            options.icon && (<i className={options.icon}></i>)
          }
          {
            !options.icon && options.logo && (<img src={options.logo} alt={options.title} />)
          }
          <p className="title" style={!options.icon && !options.logo ? { marginLeft: "18px" } : {} }>
            { options.title }
          </p>
          <i className="bx bx-menu" id="btn" onClick={() => this.setState({ open: !open })} ></i>
        </div>
        <ul className="nav-list">
          {
            menuItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))
          }
          <NavigationProfile {...user} />
        </ul>
      </div>
    );
  }
}

ResponsiveSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    PropTypes.instanceOf(NavigationItem),
  ).isRequired,
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
  }).isRequired,
};

export default ResponsiveSidebar;