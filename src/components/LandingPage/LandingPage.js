import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/macysHeadShot.jpg";
import { Wave } from "react-animated-text";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div>
        {" "}
        <h2 className="MainText">
          {" "}
          Ramsey J. Lewis{" "}
          <Fade right>
            <div className="headshotHov">
              <img className="headShot" src={headshot} alt="headshot" />{" "}
              <p className="headPtag">
                {" "}
                As a developer with a background in technology and design, my
                studies at the Fashion Institute of Technology included
                Advertising, Marketing, Communications, and User Experience.
                With a passion for logic and puzzles, I aim to apply my skills
                to help make the world run more efficiently.{" "}
              </p>
            </div>
          </Fade>
          <div className="greetingWrapper">
            <Fade left cascade>
              <div>
                {" "}
                <p className="Greeting">
                  {" "}
                  <Wave
                    effect="color"
                    effectDirection="left"
                    effectDuration={1}
                    effectChange={"#333336;"}
                    text=""
                  />{" "}
                  <Type />
                </p>{" "}
              </div>
            </Fade>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
