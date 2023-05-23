import React, { Component } from "react";
// import WWD from "../../Assets/WWD.RH.png";
import "./LifeExperince.css";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";
import calvin from "../../Assets/Calvin.png";
import pause2 from "../../Assets/ramseyPause2.png";

class LifeExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fade bottom cascade>
          <div className="LifeExperience" name="LifeExperience">
            <div className="LifeExperienceTitle">
              {" "}
              <p>
                {" "}
                <Wave
                  effect="color"
                  effectDirection="bottom"
                  effectDuration={1}
                  effectChange={"#80ed99"}
                  text="Giving Back"
                />{" "}
              </p>{" "}
            </div>
            <div className="LifeExperienceCardCOTA">
              <a
                className="cOTALink"
                href="https://councilofthought.wordpress.com/"
                target="blank"
              >
                <p> C.O.T.A - COUNCIL OF THOUGHT AND ACTION </p>
              </a>
              <p>
                {" "}
                I have experience organizing projects and events, including job
                fairs and summer classes for youth. This involvement eventually
                led me to a role in co-managing a summer camp for young
                individuals, simultaneously assisting parents and adults in
                their job search. My work with C.O.T.A. is driven by a clear
                objective: to enhance employment rates among formerly
                incarcerated individuals, reduce re-incarceration rates, and
                ultimately improve lives while creating opportunities for
                at-risk youth.
              </p>
            </div>
          </div>
        </Fade>
        <div>
          <Fade>
            <div className="LifeExperience" name="LifeExperience">
              <div className="LifeExperienceTitle">
                {" "}
                <p>
                  {" "}
                  <Wave
                    effect="color"
                    effectDirection="up"
                    effectDuration={1}
                    effectChange={"#80ed99"}
                    text="Fashion & The Arts"
                  />{" "}
                </p>{" "}
              </div>
              <div className="LifeExperienceCardBIF">
                <div>
                  <div>
                    <div className="wwd1">
                      <a
                        href="https://www.qmanagementinc.com/talent/ramsey-lewis"
                        target="blank"
                      >
                        <img className="wwd1" src={pause2} alt="calvinK" />
                      </a>
                    </div>
                  </div>
                </div>
                <p>
                  {" "}
                  My fashion career began at the renowned Fashion Institute of
                  Technology in 2019, where I immersed myself in the world of
                  art. Through countless photoshoots, magazine features, and
                  runway experiences, I gained a deep appreciation for the
                  importance of a positive work environment. Collaboration,
                  cooperation, and professionalism proved to be vital skills
                  that enhance the final artistic outcome.{" "}
                </p>
                <div>
                    <div className="wwd2">
                      <a
                        href="https://www.qmanagementinc.com/talent/ramsey-lewis"
                        target="blank"
                      >
                        <img className="wwd2" src={calvin} alt="calvinK" />
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default LifeExperience;
