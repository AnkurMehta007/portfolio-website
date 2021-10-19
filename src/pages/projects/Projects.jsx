import React from "react";
import Card from "../../component/Card";
import "./project.css";
import "./data";
import { objOne, objTwo } from "./data";

function Projects() {
  return (
    <>
      <div className="project-card-conatiner">
        <h1 className="card-tittle">PROJECTS</h1>
        <div className="card-wrapper">
          <div className="card-first">
            <Card {...objOne} />
            <Card {...objTwo} />
          </div>
          <div className="card-second">
            {/* <Card />
            <Card /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
