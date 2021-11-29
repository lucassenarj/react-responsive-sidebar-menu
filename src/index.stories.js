import React from "react";
import ResponsiveSidebar from ".";

export default {
  title: "ResponsiveSidebar",
  component: ResponsiveSidebar
}

const Template = (args) => <ResponsiveSidebar {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  menuItems: [
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
  ],
  options: {
    title: "React RSB",
    icon: "bx bxl-react icon"
  },
  user: {
    name: "Lucas Sena",
    avatar: "https://lucassenarj.github.io/images/author.jpg",
    status: "Frontend developer",
    onLogout: () => console.log("logout"),
  }
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  menuItems: [
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
  ],
  options: {
    title: "React RSB",
    logo: "https://lucassenarj.github.io/favicon.ico"
  },
  user: {
    name: "Lucas Sena",
    avatar: "https://lucassenarj.github.io/images/author.jpg",
    status: "Frontend developer",
    onLogout: () => console.log("logout"),
  }
};

