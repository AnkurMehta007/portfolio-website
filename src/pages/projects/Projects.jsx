import React from "react";
import Card from "../../component/Card";
import "./project.css";
import "./data";
import { objOne, objTwo, objThree } from "./data";
import Card2 from "../../component/Card2";

function Projects() {
  return (
    <>
      <div className="project-card-conatiner">
        <h1 className="card-tittle">PROJECTS</h1>
        <div className="card-wrapper">
          <div className="card-first">
            {/* <Card {...objOne} />
            <Card {...objTwo} /> */}
            <Card2 {...objOne} />
            <Card2 {...objTwo} />
            <Card2 {...objThree} />
          </div>
          <div className="card-second"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
