# react-responsive-sidebar-menu

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Required
* react-router-dom@^6.0.2


## Installation

```sh
# npm
npm i react-responsive-sidebar-menu --save
# yarn
yarn add react-responsive-sidebar-menu
```

## Usage

```js
import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
export default class App extends Component {
  menuItems = [
    {
      path: "/",
      text: "Dashboard",
      tooltip: "Dashboard",
      icon: "bx bx-grid-alt",
    },
    {
      path: "/users",
      text: "Users",
      tooltip: "Users",
      icon: "bx bx-user",
    },
    {
      path: "/users",
      text: "Messages",
      tooltip: "Messages",
      icon: "bx bx-chat",
    },
    {
      path: "/users",
      text: "Settings",
      tooltip: "Settings",
      icon: "bx bx-cog",
    },
  ];
  options = {
    title: "React RSB",
    icon: "bx bxl-react icon",
    logo: "https://lucassenarj.github.io/favicon.ico",
  }
  user={
    name: "Lucas Sena",
    avatar: "https://lucassenarj.github.io/images/author.jpg",
    status: "Frontend developer",
    onLogout: () => console.log("logout"),
  }
  render() {
    return (
      <ResponsiveSidebar
        menuItems={this.menuItems}
        options={this.options}
        user={this.user}
      />
    );
  }
}
```

## Props

| Prop                    | Description                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| menuItems               | An array of objects which acts as the source of data for the menu. This prop is required                         |
| menuItems.path          | Path when users will be redirected when clicked on a menu item. This prop is required                            |
| menuItems.text          | Text which act as name or title for menu items. This prop is required                                            |
| menuItems.tooltip       | Text which act as tooltip when sidebar is closed for menu items. This prop is required                           |
| menuItems.icon          | Boxicon class name. This prop is required                                                                        |
| options                 | Object which acts as source for project settings. This prop is required                                          |
| options.title           | Project or company title. This prop is required                                                                  |
| options.icon            | Boxicon path for company or project icon                                                                         |
| options.logo            | Image path company or project logo                                                                               |
| user                    | Object which acts as source for user. This prop is required                                                      |
| user.name               | User name. This prop is required                                                                                 |
| user.avatar             | User picture, image, or avatar. This prop is required                                                            |
| user.status             | User subtitle or user role. This prop is required                                                                |
| user.onLogout           | A function which acts as a callback when the logout button is click. This prop is required                       |

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React-Router-Dom](https://reactrouter.com/) - React Router DOM enables you to implement dynamic routing in a web app.
- [BoxIcons](https://boxicons.com/) - Free collection of carefully crafted open source icons

## License

MIT Licensed. Copyright (c) Lucas Sena 2021.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://app.travis-ci.com/github/lucassenarj/react-responsive-sidebar-menu

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-responsive-sidebar-menu

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/lucassenarj/react-responsive-sidebar-menu
