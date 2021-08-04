import React, { Component } from "react";
import WWD from "../../Assets/WWD.RH.png";
import "./LifeExperince.css";
import Fade from "react-reveal/Fade";

class LifeExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fade bottom cascade>
        <Fade bottom cascade>
          <div className="LifeExperience" name="LifeExperience">
            <div className="LifeExperienceTitle">
              {" "}
              <p> Philanthropy </p>{" "}
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
                Organized projects and events such as job fairs and ran summer
                classes for youth. This led me to co-manage a summer camp for
                youth while also helping parents & adults find work. The
                objective of C.O.T.A. is to increase employment rates among the
                formerly incarcerated while reducing re-incarceration rates,
                improving individual’s lives and developing opportunities for
                at-risk youth.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom cascade>
        <div className="LifeExperience" name="LifeExperience">
          <div className="LifeExperienceTitle">
            {" "}
            <p>Time In Fashion</p>{" "}
          </div>
          <div className="LifeExperienceCardBIF">
            <a
              href="https://wwd.com/fashion-news/shows-reviews/gallery/romeo-hunte-rtw-fall-1203013267/romeo-hunte-rtw-fall-2019-21/"
              target="blank"
            >
              <img className="wwd" src={WWD} alt="WWD" />
            </a>
            <p>
              {" "}
              My modeling career got its start at the Fashion Institute of
              Technology in 2019. Since then I've worked on countless
              photoshoots, been in multiple magazines and walked on runways. One
              of my main takeaways from modeling is the importance of the work
              environment. Cooperation, collaboration and decorum are the key
              skills to have in every industry. Often how well or poorly a team
              works is how well or poorly the final product comes out. My second
              takeaway from modeling is the importance of time management;
              wasting people's time is the fastest way to create problems and
              undermine the final project.{" "}
            </p>
          </div>
          </div>
        </Fade>
      </Fade>
    );
  }
}

export default LifeExperience;
