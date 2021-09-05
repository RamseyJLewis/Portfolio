import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/RamseyHeadShot.jpg";
import { Wave } from "react-animated-text";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      {/* <Fade top>
        <p className="Greeting">Hi, my name is </p>
      </Fade> */}

      <div>
        {" "}
        <h1 className="MainText">
          {" "}
          Ramsey Lewis{" "}
          <Fade right><div className='headshotHov'><img className="headShot" src={headshot} alt="headshot" />{" "}</div></Fade> 
        </h1>
      </div>
      <Fade left>
        {" "}
        <p className="Greeting">
              {" "}
              <Wave
                effect="color"
                effectDirection="up"
                effectDuration={1}
                effectChange={'#80ed99'}
                text="Software Developer"
              />{" "}
            </p>{" "}
        {/* <p className="Greeting"> Sofware Developer </p> */}
      </Fade>
      <Fade bottom>
        <p className="Objective">
          My goal is to make every project like a great relationship, with a
          flow that feels as natural as carrying on a good conversation.
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
