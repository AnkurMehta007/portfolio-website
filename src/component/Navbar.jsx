import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars, FaTheaterMasks } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleChange = () => setClick(false);
  const handleChangeToggle = () => setClick(!click);
  const [showBackground, setShowBackground] = useState([true, false, false]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="navbar-logo" onClick={handleChange}>
              <FaTheaterMasks />
              <h1>Ank</h1>
            </Link>
            <Link to="#">
              <div className="toggleButton" onClick={handleChangeToggle}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
            </Link>
            <ul className={click ? "menu-links active" : "menu-links"}>
              <li className="nav-link">
                <Link
                  to="/"
                  className={showBackground[0] ? "active" : null}
                  onClick={() => {
                    setShowBackground([true, false, false]);
                    handleChange();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/projects"
                  className={showBackground[1] ? "active" : null}
                  onClick={() => {
                    setShowBackground([false, true, false]);
                    handleChange();
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/about"
                  className={showBackground[2] ? "active" : null}
                  onClick={() => {
                    setShowBackground([false, false, true]);
                    handleChange();
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
