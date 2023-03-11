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
              As a DEV my approach is framed by years in technology and design. At the top design school The Fashion Institute of Technology my studies included Advertising and Marketing, Communications as well as User Experience.
              I’ve always been proud of my ability to appreciate and understand the users experience and
              design. I also deep understanding and love for logic, puzzles and their natural
              rigidity. I combine these abilities everyday to do my part in helping the world run more efficient.
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
            <p>
              {" "}
              Some tech close to my ❤️...{" "}
            </p>
            <p>
             Front-End: JavaScript (ES6), TypeScript, React, Next, JSX, HTML5,
              CSS3, Bootstrap, Material UI, SCSS
            </p>
            <p>
              Back-End: Node.js, Express, AWS (Amplify, RDS, S3, EC2, Cognito),
              PostgreSQL, RESTful API, JWT
            </p>
            <p>
              Other Tools: Git, VS Code, DevOps, Trello, MSFT Teams, MSFT OneNote,
              Slack, Google Analytics, Mixpanel{" "}
            </p>
          </div>
      </div>
    );
  }
}
export default About;
