import Logo from "../Logo/Logo";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWindowClose,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
// import React, { useLayoutEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";

function NavBar() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const mobileNav = () => setClick(!click);
  return (
    <>
      <div className="NavBar">
        {/* <Fade>
          <div className="navLogo">
            <Logo />
          </div>
        </Fade>
        <Fade right>
          <div className="NavBarText">
            <Link className="navlink" to="About" smooth={true}>
              <span>&lt;</span>
              Start
              <span>/&gt;</span>
            </Link>
            <Link className="navlink" to="Portfolio" smooth={true}>
              <span>&lt;</span>
              Work
              <span>/&gt;</span>
            </Link>
            <Link className="navlink" to="LifeExperience" smooth={true}>
              <span>&lt;</span>
              Life
              <span>/&gt;</span>
            </Link>
            <Link className="navlink" to="Contact" smooth={true}>
              <span>&lt;</span>
              Contact
              <span>/&gt;</span>
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
                    effect="jump"
                    delay={5}
                    effectChange={1}
                    text="Resume"
                  />
                )
                // <Wave text="Resume" effect="jump " effectChange={2.2} />
              }
            </a>
          </div>
        </Fade> */}
         <div className="hamburgerMenue">
        <FontAwesomeIcon className="Bars" icon={faBars} onClick={mobileNav} />
      </div>
      </div>

      
      {click ? (
        <div className="navBarPullOut">
                   <div className="navXOut">
        <FontAwesomeIcon className="Bars" icon={faWindowClose} onClick={mobileNav} />

      </div>
          <div className="NavBarText">
            <Link
              className="navlink"
              to="Home"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Home
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="About"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Start
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="Portfolio"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Work
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="LifeExperience"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Life
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="Contact"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Contact
              <span>/&gt;</span>
            </Link>
            {/* <div className="Resume">
              <p className="navlink">Resume</p>
              <a
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="ResumeNavMobile"
                style={{}}
                href={
                  "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub"
                }
                target="blank"
              >
                {
                  <FontAwesomeIcon className="resumeIcon" icon={faEnvelopeOpen}>
                    <span>&lt;</span>
                    Resume
                    <span>/&gt;</span>
                  </FontAwesomeIcon>
                }
              </a>
            </div> */}
   
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}
export default NavBar;
