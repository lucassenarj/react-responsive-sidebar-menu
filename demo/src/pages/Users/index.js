import React from "react";
import ResponsiveSidebar from "./../../../../src";
import "./style.css";

const Users = () => {
  return (
    <React.Fragment>
      <ResponsiveSidebar
        menuItems={
          [
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
          ]
        }
        options={{
          title: "React RSB",
          icon: "bx bxl-react icon",
          logo: "https://lucassenarj.github.io/favicon.ico",
        }}
        user={{
          name: "Lucas Sena",
          avatar: "https://lucassenarj.github.io/images/author.jpg",
          status: "Frontend developer",
          onLogout: () => console.log("logout"),
        }}
      />
      <section>
        <h1>Users page</h1>
      </section>
    </React.Fragment>
  )
};

export default Users;
