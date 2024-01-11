import Logo from "../Logo/Logo";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFileDownload,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
// import React, { useLayoutEffect, useState } from 'react';
import resume from "../../Assets/RamseyJLewisResume.pdf";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";
import React, { Component } from "react";

function NavBar() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const mobileNav = () => setClick(!click);
  return (
    <>
      <div className="NavBar">
        <Fade left>
          <div className="navLogo">
            <Logo />
          </div>
        </Fade>
        <Fade right>
          <div className="NavBarText">
            <Link className="navlink" to="About" smooth={true}>
              {" "}
              About{" "}
            </Link>
            <Link className="navlink" to="Portfolio" smooth={true}>
              {" "}
              Work{" "}
            </Link>
            <Link className="navlink" to="LifeExperience" smooth={true}>
              {" "}
              Life{" "}
            </Link>
            <Link className="navlink" to="Contact" smooth={true}>
              {" "}
              Contact{" "}
            </Link>
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="ResumeNav"
              style={{ width: "100px" }}
              href={
                "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub"
              }
              target="blank"
              download
            >
              {
                hover ? (
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                ) : (
                  <Wave
                    effect="pop"
                    delay={5}
                    effectChange={0.1}
                    text="Resume"
                  />
                )
                // <Wave text="Resume" effect="jump " effectChange={2.2} />
              }
            </a>
          </div>
        </Fade>
      </div>

      <div className="mobileButton">
        {" "}
        <FontAwesomeIcon
          className="Bars"
          icon={faBars}
          onClick={mobileNav}
        />{" "}
      </div>
      {click ? (
        <div className="NavBarMobile">
          <div className="NavBarTextMobile">
            <Link
              className="navlinkMobile"
              to="Home"
              smooth={true}
              onClick={mobileNav}
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              className="navlinkMobile"
              to="About"
              smooth={true}
              onClick={mobileNav}
            >
              {" "}
              About{" "}
            </Link>
            <Link
              className="navlinkMobile"
              to="Portfolio"
              smooth={true}
              onClick={mobileNav}
            >
              {" "}
              Work{" "}
            </Link>
            <Link
              className="navlinkMobile"
              to="LifeExperience"
              smooth={true}
              onClick={mobileNav}
            >
              {" "}
              Life{" "}
            </Link>
            <Link
              className="navlinkMobile"
              to="Contact"
              smooth={true}
              onClick={mobileNav}
            >
              {" "}
              Contact{" "}
            </Link>
            <div className="Resume">
              <a
                className="navlinkMobile"
                href={
                  "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub"
                }
                target="blank"
              >
                Resume       
              </a>{" "}
            </div>
            <div className="navLogo">
              <Logo />
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}
export default NavBar;
