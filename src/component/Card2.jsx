import React from "react";
import "./card2.css";
import { GoCreditCard } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import { BsCloudDrizzle } from "react-icons/bs";
import { Button } from "./Button";

export default function Card2({ img, heading, desc, technologies, repolink }) {
  let icon = 0;
  if (img === "credit") {
    icon = <GoCreditCard />;
  }

  if (img === "weather") {
    icon = <BsCloudDrizzle />;
  }

  return (
    <>
      <IconContext.Provider value={{ size: "130px" }}>
        <div className="card2-container">
          <div className="card2">
            <div className="front">
              <div className="card-image-container">{icon}</div>
              <div className="title">{heading}</div>
            </div>
            <div className="back">
              <div className="card2-text-container">
                <p>
                  <span>Description:-</span> {desc}
                </p>
                <p>
                  <span>Technologies:-</span> {technologies}
                </p>
                <a href={repolink}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                    Github
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
