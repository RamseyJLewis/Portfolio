import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/RamseyHeadShot.jpg";
import { Wave } from "react-animated-text";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div>
        {" "}
        <h1 className="MainText">
          {" "}
          Ramsey Lewis{" "}
          <Fade right><div className='headshotHov'><img className="headShot" src={headshot} alt="headshot" />{" "}</div></Fade>
        </h1>
      </div>
      <div>
        <Fade left cascade>
          <div>
            {" "}
            <p className="Greeting">
              {" "}
              <Wave
                effect="color"
                effectDirection="left"
                effectDuration={1}
                effectChange={'#80ed99'}
                text="Software Engineer"
              />{" "}
            </p>{" "}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <p className="Objective">
        Connecting customers and businesses through software solutions that bridge gaps and drive growth.
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
