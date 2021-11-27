import React, { Component } from "react";
import NavigationItem from "./NavigationItem";
import NavigationProfile from "./NavigationProfile";
import "./style.css";

export default class extends Component {
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