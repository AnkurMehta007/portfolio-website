import React from "react";
import { Button } from "../../component/Button";
import "./Aboutpage.css";
import { MdDownload } from "react-icons/md";

function Aboutpage() {
  return (
    <>
      <div className="first-about">
        <div className="about-main-container">
          <div className="about-upper animation">
            <h2>
              Hi, I'm <span>Ankur Mehta!</span>
            </h2>

            <p>
              I am from Punjab (India). I have recently completed my B.Tech
              degree in computer science from Guru Nanak Dev universty.
            </p>
          </div>
          <div className="about-lower animation">
            <div className="about-image-container">
              <img src="images/reading.svg" alt="hello" />
            </div>
            <div className="about-text-container">
              <div className="paragraph">
                <p>
                  My education and work have taught me the need for constant
                  learning and evolving in the career of a developer. I believe
                  that there is no formula to a good user experience and every
                  project provides an opportunity for discovery.
                </p>
                <p>
                  With a passion for user-centered design, a problem solving
                  approach, and a strong growth mindset, my intent is to test
                  the boundaries of user interactions and create innovative
                  product experiences.
                </p>
              </div>
              <a href="./resume.doc" download="ankur_resume">
                <Button buttonSize="btn--large">
                  <MdDownload style={{ fontSize: "25px" }} />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
