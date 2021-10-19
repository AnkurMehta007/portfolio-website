import React from "react";
import "./card.css";
import { Button } from "./Button";
import { GoCreditCard } from "react-icons/go";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-image-container">
          {/* <img src="images/card.svg" alt="na" /> */}
          <GoCreditCard style={{ fontSize: "130px" }} />
        </div>
        <div className="card-text-container">
          <h2>Credit Card</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iste
            necessitatibus natus voluptas ullam ab architecto dolor, deserunt
          </p>
          <p>
            <span>Technologies:-</span> Html,Css,Javascript and react.
          </p>
          <a href="https://github.com/AnkurMehta007">
            <Button buttonStyle="btn--outline" buttonSize="btn--medium">
              Github
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
