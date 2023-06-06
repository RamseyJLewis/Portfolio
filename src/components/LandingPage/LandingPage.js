import React, { useEffect, useRef } from "react";
import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/AI_HeadShot.jpg";
import { Wave } from "react-animated-text";

const LandingPage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".headShot").classList.add("shadow");
    }, 500);
  }, []);

  return (
    <div className="LandingPage">
      <div>
        <h1 className="MainText">
          Ramsey Lewis
          <Fade>
            <div className="headshotHov">
              <img
                className="headShot"
                src={headshot}
                alt="headshot"
                loading="auto"
              />
            </div>
          </Fade>
        </h1>
      </div>
      <div>
        <Fade left cascade>
          <div>
            <p className="Greeting">
              <Wave
                effect="color"
                effectDirection="left"
                effectDuration={1}
                effectChange={"#80ed99"}
                text="Software Engineer"
              />
            </p>
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <p className="Objective">
          Connecting customers to businesses through software solutions,
          bridging gaps & driving growth.
          <br />
          <Fade>
            <div className="spotify_widget">
              <iframe
                src="https://open.spotify.com/embed/playlist/6BSHtS011hwW4GU2g2SciM?utm_source=generator&theme=0"
                frameBorder="0"
                loading="eager"
              ></iframe>
            </div>
          </Fade>
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
