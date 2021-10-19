import React from "react";
import "./Aboutpage.css";

function Aboutpage() {
  return (
    <>
      <div className="first-about">
        <div className="about-main-container">
          <div className="about-upper">
            <h2>Hi, I'm Ankur Mehta!</h2>

            <p>
              I am from Punjab. I have recently completed my B.Tech degree in
              computer science from Guru Nanak Dev universty.
            </p>
          </div>
          <div className="about-lower">
            <div className="about-image-container">
              <img src="images/reading.svg" alt="hello" />
            </div>
            <div className="about-text-container">
              <p>
                My education and work have taught me the need for constant
                learning and evolving in the career of a developer. I believe
                that there is no formula to a good user experience and every
                project provides an opportunity for discovery.
              </p>
              <p>
                With a passion for user-centered design, a problem solving
                approach, and a strong growth mindset, my intent is to test the
                boundaries of user interactions and create innovative product
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
