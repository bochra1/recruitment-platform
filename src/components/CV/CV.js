import React from "react";

import "./CV.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Sidebar from "../Candidat/SideBar/Sidebar";

function CV() {
  return (
    <div className="CV">
      <Sidebar />
      <div style={{ marginLeft: "5%", marginRight: "2%" }}>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default CV;
