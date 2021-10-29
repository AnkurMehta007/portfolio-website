import React from "react";
import "./card2.css";
import { GoCreditCard } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import { BsCloudDrizzle } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { Button } from "./Button";

export default function Card2({
  img,
  heading,
  desc,
  technologies,
  repolink,
  background,
}) {
  let icon = 0;
  if (img === "credit") {
    icon = <GoCreditCard />;
  }

  if (img === "weather") {
    icon = <BsCloudDrizzle />;
  }
  if (img === "blog") {
    icon = <GiNotebook />;
  }

  const front = () => {
    if (background === "yellow") {
      return "front yellow";
    }
    if (background === "purple") {
      return "front purple";
    }
    if (background === "green") {
      return "front light-green";
    }
  };
  const back = () => {
    if (background === "yellow") {
      return "back yellow";
    }
    if (background === "purple") {
      return "back purple";
    }
    if (background === "green") {
      return "back light-green";
    }
  };

  return (
    <>
      <IconContext.Provider value={{ size: "130px" }}>
        <div className="card2-container">
          <div className="card2">
            <div className={front()}>
              <div className="card-image-container">{icon}</div>
              <div className="title">{heading}</div>
            </div>
            <div className={back()}>
              <div className="card2-text-container">
                <p>
                  <span>Description:-</span> {desc}
                </p>
                <p>
                  <span>Technologies:-</span> {technologies}
                </p>
                <a href={repolink} target=" ">
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
