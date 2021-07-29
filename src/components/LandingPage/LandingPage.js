import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Fade top>
        <p className="Greeting">Hi, my name is </p>
      </Fade>
      <h1 className="MainText"> Ramsey Lewis</h1>
      <Fade bottom>
        <p className="Objective">
        <Wave
            text="My goal is to make every project like a great relationship, with a flow that feels as natural as carrying on a good conversation."
            effect="verticalFadeIn"
            effectDirection="left"
            speed="150"
            iterations="1"          
          />
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
