import React from "react";
import "./App.css";
import DashboarMainComponent from "./component/DashboarMainComponent";
import Sidebar from "./component/Sidebar";
import "./responsive.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <DashboarMainComponent />
      </div>
    </div>
  );
};

export default App;
