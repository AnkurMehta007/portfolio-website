import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./component/Footer";

import Navbar from "./component/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/aboutpage/Aboutpage";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/about" component={Aboutpage}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
