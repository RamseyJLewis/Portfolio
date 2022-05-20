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
        <div className="AboutTitle">
          {" "}
          <p>
            {" "}
            <Wave
              effect="color"
              effectDirection="up"
              effectDuration={1}
              effectChange={"#80ed99"}
              text="    Methodology    "
            />{" "}
          </p>{" "}
        </div>
        <Fade bottom cascade>
          <div className="AboutCard">
            <p>
              {" "}
              As a Software Engineer my approach is framed by years in
              technology and design. With a background of the formal analysis of art, 
              study of communications as well as User Experience, during my training at
              the Fashion Institute of Technology. I’ve always enjoyed my ability to appreciate art and
              design with their loose boundaries and interprications while also
              having a deep love for logic, puzzles and their natural
              rigidity.
            </p>
            <a
              className="logo"
              href="https://github.com/RamseyJLewis"
              target="blank"
            >
              {/* {<FontAwesomeIcon icon={faJs} />} */}

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

              {/* {<FontAwesomeIcon icon={faCss3} />} */}
            </a>
            <p>
              {" "}
              A few technologies I've been working with recently are below:{" "}
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
              Tools: Git, VS Code, DevOps, Trello, MSFT Teams, MSFT OneNote,
              Slack, Google Analytics, Mixpanel{" "}
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}
export default About;
