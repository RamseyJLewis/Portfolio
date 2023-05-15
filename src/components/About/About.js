import React, { Component } from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About" name="About">
        <Fade bottom cascade>
          <div className="AboutTitle">
            {" "}
            <p>
              {" "}
              <Wave
                effect="color"
                effectDirection="left"
                effectDuration={1}
                effectChange={"#80ed99"}
                text="Methodology"
              />{" "}
            </p>{" "}
          </div>
        </Fade>
        <div className="AboutCard">
          <p>
            {" "}
            With a background in both technology and design, I bring a
            well-rounded approach to my role as a Software Engineer. Having
            studied at The Fashion Institute of Technology, I gained valuable
            insights into art, communications, and User Experience. This fusion
            of creative interpretation and logical problem-solving allows me to
            excel in my work. I pride myself on bridging the gap between the
            fluidity of design and the rigidity of logic.
          </p>
          <a
            className="logo"
            href="https://github.com/RamseyJLewis"
            target="blank"
          >
            <div className="container">
              <span className="react-logo">
                <span className="nucleo"></span>
              </span>
            </div>

            <div className="container">
              <span className="react-logo">
                <span className="nucleo"></span>
              </span>
            </div>

            <div className="container">
              <span className="react-logo">
                <span className="nucleo"></span>
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default About;
