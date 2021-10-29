import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Footer.css";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "2rem" }}>
        <div className="footer">
          <div className="footer-heading">
            <h2>Connect with me.</h2>
          </div>
          <ul className="footer-menu">
            <li>
              <a href="https://www.linkedin.com/in/ankur9517/" target=" ">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/AnkurMehta007" target=" ">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ankur___mehta/" target=" ">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <div className="footer-email">
            <h4>ankurmehta9517@gmail.com</h4>
            <h5>Website designed and coded by myself.</h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
