import React, { useEffect, useRef } from "react";
import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/RamseyHeadShot.jpg";
import { Wave } from "react-animated-text";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div>
        <h1 className="MainText">
          Ramsey Lewis
          <Fade right>
            <div className="headshotHov">
              <img className="headShot" src={headshot} alt="headshot" />
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
          <div className="spotify_widget">
            {/* <iframe
              src="https://open.spotify.com/embed/playlist/6BSHtS011hwW4GU2g2SciM?utm_source=generator&theme=0"
              frameBorder="0"
              loading="lazy"
            ></iframe> */}
          </div>
          {/* with this elemnt you can play and pause the spot player document.querySelector('[data-testid="preview-play-pause"] button').click() */}
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
