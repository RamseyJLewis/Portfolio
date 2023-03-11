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
          <div className="LifeExperience" name="LifeExperience">
          <Fade bottom cascade > 
            <div className="LifeExperienceTitle">
              {" "}
              <p>
                {" "}
                <Wave
                  effect="color"
                  effectDirection="bottom"
                  effectDuration={1}
                  effectChange={"#80ed99"}
                  text="Humanitarian Work"
                />{" "}
              </p>{" "}
            </div>
            </Fade>
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
                Organized projects and events such as job fairs and ran summer
                classes for youth. This led me to co-manage a summer camp for
                youth while also helping parents & adults find work. The
                objective of C.O.T.A. is to increase employment rates among the
                formerly incarcerated while reducing re-incarceration rates,
                improving individual’s lives and developing opportunities.
              </p>
            </div>
          </div>
    
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
                  text="Fashion + The Arts"
                />{" "}
              </p>{" "}
            </div>
            <div className="LifeExperienceCardBIF">
              <div>
                <Fade>
                  <div className="wwd1">
                    <a
                      href="https://www.qmanagementinc.com/talent/ramsey-lewis"
                      target="blank"
                    >
                      <img className="wwd1" src={pause2} alt="calvinK" />
                    </a>
                  </div>
                </Fade>
              </div>
              <p class="modelingBio"> 
                {" "}
                My modeling career got its start at the Fashion Institute of
                Technology in 2019. Since then I've worked on countless
                photoshoots, been in multiple magazines and walked on runways.
                One of my main takeaways from modeling is the importance of the
                work environment. Cooperation, collaboration and decorum are the
                key skills to have in every industry. Often how well a team
                works is how well the final product comes out.{" "}
              </p>
              <div>
                <Fade>
                  <div className="wwd2">
                    <a
                      href="https://www.qmanagementinc.com/talent/ramsey-lewis"
                      target="blank"
                    >
                      <img className="wwd2" src={calvin} alt="calvinK" />
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default LifeExperience;
