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
          <Fade >
            <div className="headshotHov">
              <img className="headShot" src={headshot} alt="headshot" />{" "}
              <Fade right >
              <p className="headPtag">
                 My experience includes
                Advertising, Marketing, Communications, User Experience & Software Development.
              <br></br>
              <br></br>
              <span> As a creator I'm constantly sharpening my skills
                to make the web beautiful & efficient.{" "}</span>
              </p>
              </Fade>
            </div>
          </Fade>
          <div className="greetingWrapper">
              <div>
                {" "}
                <div className="Greeting">
                  {" "}
                  <Wave
                    effect="color"
                    effectDirection="left"
                    effectDuration={1}
                    effectChange={" #ff0000, #ffa500, #ffff00. HEX colors #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee.;"}
                    text=""
                  />{" "}
                  <Type />
                </div>{" "}
              </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
