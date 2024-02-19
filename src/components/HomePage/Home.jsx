import React, { useState } from "react";

import Hello from "./Hello";
import Listen from "../listenpage/Listen";
import Contact from "../contact/Contact";
import GetApp from "../getapp/GetApp";
import Navbar from "./navbar";
import "./style.css"

const HomePage = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="homepage">
      <Navbar setActivePage={setActivePage} />
      {activePage === "home" && <Hello />}
      {activePage === "listen" && <Listen />}
      {activePage === "contact" && <Contact />}
      {activePage === "getapp" && <GetApp />}
    </div>
  );
};

export default HomePage;
