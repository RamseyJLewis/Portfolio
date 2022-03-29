import React, { Component } from "react";
import "./Portfolio.css";
import card0 from "../../Assets/UnlockTheBox.png";
import card1 from "../../Assets/Not-Flix.png";
import card2 from "../../Assets/SPACE-FORCE.png";
import card4 from "../../Assets/FishCat.png"
import TeammateMe from "../../Assets/TeammateMe.png";
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
        url: "www.dentsu.com",
        title: "Dentsu",
        desc: "Dentsu Inc. is a Japanese international advertising and public relations joint stock company headquartered in Tokyo. Dentsu is currently the largest advertising agency and the fifth largest advertising agency network in the world in terms of worldwide revenues.",
        tech: ["JavaScript (ES6)", "CSS", "ADOBE TARGET", "BIT BUCKET", "JIRA"],
        img: dentsu,
      },
      {
        url: "https://www.teammateme.com/",
        title: "TeammateMe",
        desc: "TeammateMe helps users find and create teams for their course, projects, classes, and extracurricular activities. Also, it helps them gain professional experience and sharpen their teamwork skills. At the same time, they can build lasting reputation scores for their resume.",
        tech: ["JavaScript (ES6)", "SCSS", "API", "Next.js", "PostgreSQL"],
        img: TeammateMe,
      },
      {
        url: "https://fishcat.org/",
        title: "FishCat",
        desc: "FishCats goal is to empower global communities with conservation jobs that restore ecosystems, and help solve deforestation, extinction, and climate change. I created and updated the UX/UI of the site. The goal here was to make an inspiring and comfortable site in order to drive up Donations.",
        tech: ["HTML", "CSS", "JavaScript (ES6)", "React.JS.", "Gatsby"],
        img: card4,
      },
      {
        url: "https://energimeuniversity.org/",
        title: "Energime University",
        desc: "Energime University has the single mission of providing the means by which we mentor and empower our global population with the critical skills necessary to carry out this monumental effort. By creating a central education platform that connects the world in a unified and structured approach, we can manage our finite resources and protect our fragile environment.",
        tech: ["HTML", "CSS", "JavaScript (ES6)", "API", "React.js", "ASP.NET"],
        img: Energime,
      },
      {
        url: "https://www.unlockthebox.io/",
        title: "Unlock The Box",
        desc: "An interactive web application to assist in teaching students through team based game play. Teachers can create accounts attached to an id connected to the database PostgreSQL, to create, delete , read and update questions for students hosted in rooms.",
        tech: ["React J.S", "JavaScript (ES6)" ,"HTML" ,"CSS" ,"AWS","PostgreSQL"],
        img: card0,
      },
     
     
      {
        url: "https://ramseyjlewis.github.io/Not-Flix/",
        title: "Not-Flix",
        desc: "A Netflix search imitation using the IMBD API. This project focuses on making a seamless design using JavaScript, HTML and CSS. Pulling information from the IMBD database, the app then displays movie information onto cards. Initially the cards have a front and upon hovering over the movie-card a new request gathers more detailed information which is displayed after flipping the card.",
        tech: [ "Vanilla-JavaScript","HTML" ,"CSS" ,"API"],
        img: card1,
      },
      {
        url: "https://ramseyjlewis.github.io/Space-Force-moon-of-gold/",
        title: "Space Force Moon of gold",
        desc: "An arcade shooter inspired by Space Invaders but with 360-degree gameplay. Escape the massive swarm of churning aliens, all of which are being tracked through mathematics, objects and arrays. This object-oriented program is built using JavaScript, HTML and CSS. The Swarm of enemies try to crash into the player. The objective is to last until backup arrives",
        tech: ["Vanilla-JavaScript", "HTML" ,"CSS"],
        img: card2,
      },     
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
                      backgroundImage: `url( ${
                        project.img || this.state.backgroundImage
                      })`,
                    }}
                  ></div>
                </a>
                </Fade>
                <Fade right>
                <div className="PortfolioText">
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                  <div >
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
        <div className="ProjectTitle">
          {" "}
          {/* <p>Projects</p> */}
          <p>
              {" "}
              <Wave
                effect="color"
                effectDirection="up"
                effectDuration={1}
                effectChange={'#80ed99'}
                text="Organizations + Projects"
              />{" "}
            </p>{" "}
        </div>
        <div className="ProjectsContainer">{this.createCard()}</div>
      </div>
    );
  }
}

export default Portfolio;
