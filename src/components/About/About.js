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
      <Fade > 
        <div className="About" name="About">
          <div className="AboutTitle">
            {" "}
            <h2> About Me </h2>{" "}
          </div>
          <div className="AboutCard">
            <p>
              {" "}           
            I am a Software Developer with years in technology and design. My approach is framed by a background in the formal analysis of art during his training at the Fashion Institute of Technology and years in agile web development. These attributes come together to make a creative & experienced frontend software engineer with a robust attention to detail.              
            </p>
            <p>
              {" "}
              Here Are A  few technologies I've been working with recently
              below:{" "}
            </p>
            <p> JavaScript, React, HTML, CSS,</p>
            <p>Java, JSX, PostgreSQL, AWS S3</p>
            <p> AWS EC2, AWS Cloudfront, AWS IAM, Node.js </p>
          </div>
        </div>
      </Fade>
    );
  }
}
export default About;
