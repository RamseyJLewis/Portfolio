import "./LandingPage.css";
import Fade from "react-reveal/Fade";
import headshot from "../../Assets/RamseyHeadShot.jpg";
import { Wave } from "react-animated-text";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";



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
                text=""
              />{" "}
                      <Type />
            </p>{" "}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <p className="Objective">
        “Dig deep within yourself, 
        for there is a fountain of goodness ever ready to flow if you will keep digging.”
         ~ Marcus Aurelius
        </p>
      </Fade>
    </div>
  );
};

export default LandingPage;
