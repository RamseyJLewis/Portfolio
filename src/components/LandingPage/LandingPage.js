import React, { useEffect, useRef } from "react";
import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/headShot-Ai-Ramsey.jpg";
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
          <span> Ramsey Lewis </span>
          <Fade>
            <div className="headshotHov">
              <img className="headShot" src={headshot} alt="headshot" />
            </div>
          </Fade>
        </h1>
      </div>
      <div>
        <Fade left cascade>
          <div className="Greeting_wrapper">
            <p className="Greeting">Technology Specialist</p>
            <p className="waveDiv">         
              <Wave
                effect="color"
                effectDirection="left"
                effectDuration={6}
                effectChange={"#80ed99"}
                text="&lt;/&gt;"
              />              
            </p>
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="Objective">
          <p className="landingText">
            Connecting customers to businesses through software solutions,
            bridging gaps & driving growth.
          </p>
          <Fade>
            <div className="spotify_widget">
              {/* <iframe
                src="https://open.spotify.com/embed/playlist/6BSHtS011hwW4GU2g2SciM?utm_source=generator&theme=0"
                frameBorder="0"
                loading="lazy"
              ></iframe> */}
              <iframe
                src="https://open.spotify.com/embed/playlist/22yVU6XHTuhoiAeRP6VpcQ?utm_source=generator&theme=0"
                frameBorder="0"
                loading="lazy"
              ></iframe>
            </div>
          </Fade>
        </div>
      </Fade>
      <div className="planetCont" loading="lazy">
        <iframe
          src="https://my.spline.design/planetcopy-5b02927538e75c4cd8c29bc99eb55c4e/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;
