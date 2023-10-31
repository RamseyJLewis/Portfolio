import React, { Component } from "react";
import "./Portfolio.css";
import card0 from "../../Assets/UnlockTheBox.png";
import card1 from "../../Assets/Not-Flix.png";
import card2 from "../../Assets/SPACE-FORCE.png";
import card4 from "../../Assets/FishCat.png"
import TeammateMe from "../../Assets/TeammateMe.png";
import Merkle from "../../Assets/Merkle.png";
import dentsu from "../../Assets/dentsu.jpg";
import Energime from "../../Assets/EnergimeUniversity.png";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputChange = (event) => {
    this.setState({ filter: event.target.innerText });
  };

  createCard = () => {
    const allProjects = [
      {
        url: "https://www.merkle.com",
        title: "Merkle",
        desc: "Merkle is a leading data-driven customer experience management (CXM) company that specializes in the delivery of unique, personalized customer experiences.",
        tech: ["S.r Software Engineer"],
        img: Merkle,
      },
      {
        url: "https://www.dentsu.com",
        title: "Dentsu",
        desc: "Dentsu Inc. is a Japanese advertising with a headquartered in Tokyo, currently Dentsu is the fifth largest advertising agency network internationally.",
        tech: ["Optimization Engineer"],
        img: dentsu,
      },
      {
        url: "https://fishcat.org/",
        title: "FishCat",
        desc: "FishCats goal is to empower global communities with conservation jobs that restore ecosystems, and help solve deforestation, extinction, and climate change.",
        tech: ["Software Developer"],
        img: card4,
      },
      {
        url: "https://www.teammateme.com/",
        title: "TeammateMe",
        desc: "TeammateMe is a social media web app that helps users find and create teams for their course, projects, classes, and extracurricular activities.",
        tech: ["Full Stack Engineer"],
        img: TeammateMe,
      },
 
      // {
      //   url: "https://energimeuniversity.org/",
      //   title: "Energime University",
      //   desc: "Energime University has the single mission of providing the means by which we mentor and empower our global population with the critical skills necessary to carry out this monumental effort. By creating a central education platform that connects the world in a unified and structured approach, we can manage our finite resources and protect our fragile environment.",
      //   tech: ["HTML", "CSS", "JavaScript (ES6)", "API", "React.js", "ASP.NET"],
      //   img: Energime,
      // },
      // {
      //   url: "https://www.unlockthebox.io/",
      //   title: "Unlock The Box",
      //   desc: "An interactive web application to assist in teaching students through team based game play. Teachers can create accounts attached to an id connected to the database PostgreSQL, to create, delete , read and update questions for students hosted in rooms.",
      //   tech: ["React J.S", "JavaScript (ES6)" ,"HTML" ,"CSS" ,"AWS","PostgreSQL"],
      //   img: card0,
      // },
      // {
      //   url: "https://ramseyjlewis.github.io/Space-Force-moon-of-gold/",
      //   title: "Space Force Moon of gold",
      //   desc: "An arcade shooter inspired by Space Invaders. Escape the massive swarm of churning aliens, all of which are being tracked through mathematics built using ES6.",
      //   tech: ["Developer"],
      //   img: card2,
      // },

      // {
      //   url: "https://ramseyjlewis.github.io/Not-Flix/",
      //   title: "Not-Flix",
      //   desc: "A Netflix search imitation using the IMBD API. This project focuses on making a seamless design using JavaScript, HTML and CSS. Pulling information from the IMBD database, the app then displays movie information onto cards. Initially the cards have a front and upon hovering over the movie-card a new request gathers more detailed information which is displayed after flipping the card.",
      //   tech: ["Vanilla-JavaScript", "HTML", "CSS", "API"],
      //   img: card1,
      // },

    ];

    return (
      allProjects
        // removes any items that dont contain they filter word(this.state.filter)
        .filter((project) => {
          return project.tech;
          // .includes(this.state.filter)
        })
        .map((project, index) => {
          //itterates through an array and call create card function for every item in array
          // creates a card
          return (
            <div className="wrapper" key={index}>
              <Fade left>
                <a href={project.url} target="blank">
                  {" "}
                  <div
                    key={project.title}
                    className="projectCard"
                    style={{
                      backgroundImage: `url( ${project.img || this.state.backgroundImage
                        })`,
                    }}
                  ></div>
                </a>
              </Fade>
              <Fade right>
                <div className="PortfolioText">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className='techWrapper'>
                    {project.tech.map((tech, idx) => (
                      <span className='tech' key={idx}> {tech}</span>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>

          );
        })
    );
  };

  render() {
    return (
      <div className="Portfolio" name="Portfolio">
        <Fade bottom cascade>
          <div className="ProjectTitle">
            {" "}
            <p>
              {" "}
              <Wave
                effect="color"
                effectDirection="up"
                effectDuration={1}
                effectChange={'#80ed99'}
                text="Organizations"
              />{" "}
            </p>{" "}
          </div>
        </Fade>
        <div className="ProjectsContainer">{this.createCard()}</div>
      </div>
    );
  }
}

export default Portfolio;
