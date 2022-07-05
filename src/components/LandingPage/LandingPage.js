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
      <Fade left>
        {" "}
        <p className="Greeting">
              {" "}
              <Wave
                effect="color"
                effectDirection="bottom"
                effectDuration={1}
                effectChange={'#80ed99'}
                text="Software Engineer"
                wordWrap="none"
              />{" "}
            </p>{" "}
      </Fade>
      <Fade bottom>
        <p className="Objective">
         Make every project like a great friendship, 
          with a flow as natural as good conversation.
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
