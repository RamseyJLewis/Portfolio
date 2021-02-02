import React, { Component } from 'react';
import './Portfolio.css';
import card0 from '../../Assets/UnlockTheBox.png'
import card1 from '../../Assets/Not-Flix.png'
import card2 from '../../Assets/SPACE-FORCE.png'
import card3 from '../../Assets/CALC.png'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    handleInputChange = (event) => {
        this.setState({ filter: event.target.innerText })
    }

    createCard = () => {
        const allProjects = [
            {
                url: 'https://www.unlockthebox.io/',
                title: 'Unlock The Box',
                desc: 'An interactive web application to assist in teaching students through team based game play. Teachers can create accounts attached to an id connected to the database PostgreSQL, to create, delete , read and update questions for students hosted in rooms.Teachers can control every aspect of these rooms inculding the time given and possible hints distributed to assist in learning. In these rooms questions can be answered by students, and students are given live updates on how far along the challenge they themselves, and their friendly competition are.',
                tech: ['React J.S','HTML','CSS','AWS','POSTGRESQL'],
                img: card0
            },
            {
                url: 'https://ramseyjlewis.github.io/Not-Flix/',
                title: 'Not-Flix',
                desc: 'A Netflix search imitation using the IMBD API. This project focuses on making a seamless design using JavaScript, HTML and CSS. Pulling information from the IMBD database, the app then displays movie information onto cards. Initially the cards have a front and upon hovering over the movie-card a new request gathers more detailed information which is displayed after flipping the card.',
                tech: ['HTML', 'CSS', 'JAVASCRIPT', 'API'],
                img: card1
            },
            {
                url: 'https://ramseyjlewis.github.io/Space-Force-moon-of-gold/',
                title: 'Space-Force-moon-of-gold',
                desc: 'An arcade shooter inspired by Space Invaders but with 360-degree gameplay. Escape the massive swarm of churning aliens, all of which are being tracked through mathematics, objects and arrays. This object-oriented program is built using JavaScript, HTML and CSS. The Swarm of enemies try to crash into the player. The objective is to last until backup arrives',
                tech: ['HTML', 'CSS', 'JAVASCRIPT'],
                img: card2
            },
            {
                url: 'https://ramseyjlewis.github.io/Basic-Calculator/',
                title: 'Basic Calculator',
                desc: ' A basic calculator built with HTML, CSS & JavaScript that can perform basic asthmatic. Created with a design intended to make user experience more pleasant than traditional online calculators.',
                tech: ['HTML', 'CSS', 'JAVASCRIPT'],
                img: card3
            },

        ];

        return (
            allProjects
                // removes any items that dont contain they filter word(this.state.filter)
                .filter((project) => {
                    return project.tech
                    // .includes(this.state.filter)
                })
                .map((project, index) => {
                    console.log(project)
                    //itterates through an array and call create card function for every item in array
                    console.log(project)
                    // creates a card
                    return (
                        <div className='wrapper' key={index} >
                            <a href={project.url} target='blank' > <div key={project.title} className="projectCard" style={{ backgroundImage: `url( ${project.img || this.state.backgroundImage})` }}></div></a>
                            <div className='PortfolioText'>
                                <h2>{project.title}</h2>
                                <p>{project.desc}</p>
                                {project.tech.map((tech, idx) => <p key={idx}> {tech}</p>)}
                            </div>
                        </div>
                    )
                })
        )
    }

    render() {
        return (
            <div className='Portfolio' name='Portfolio'>

                <div className='ProjectTitle'> <h2>Projects</h2></div>
                <div className='ProjectsContainer'>
                    {this.createCard()}
                </div>
            </div>
        )
    }
}

export default Portfolio;