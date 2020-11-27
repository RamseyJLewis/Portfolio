import React, { Component } from 'react';
import './Portfolio.css';
import card1 from '../../Assets/Not-Flix.png'
import card2 from '../../Assets/SPACE-FORCE.png'
import card3 from '../../Assets/CALC.png'

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state ={};
    };
    handleInputChange = (event) => {
        this.setState({filter: event.target.innerText})
    }

    createCard = () => {
        const allProjects = [
            {
                url: 'https://ramseyjlewis.github.io/Not-Flix/',
                title: 'Not-Flix',
                desc: 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.',
                tech: [,'HTML' ,'CSS', 'JAVASCRIPT', 'API'],
                img: card1
            },
            {
                url: 'https://ramseyjlewis.github.io/Space-Force-moon-of-gold/',
                title: 'Space-Force-moon-of-gold',
                desc: 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.',
                tech: ['HTML', 'CSS','JAVASCRIPT'],
                img: card2
            },
            {
                url: 'https://ramseyjlewis.github.io/Basic-Calculator/',
                title: 'Basic Calculator',
                desc: 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.',
                tech: ['HTML', 'CSS','JAVASCRIPT'],
                img: card3
            },
        
        ];

        return(
        allProjects
        // removes any items that dont contain they filter word(this.state.filter)
            .filter((project) => { return project.tech
            // .includes(this.state.filter)
        })
            .map((project, index) => {
                console.log(project)
            //itterates through an array and call create card function for every item in array
                console.log(project)
            // creates a card
                return(
                   <div className= 'wrapper'key= {index} >
                    <div key={project.title} className= "projectCard" style={{backgroundImage: `url( ${project.img || this.state.backgroundImage})`}}>
                          </div>
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

    render(){
        return(
            <div className = 'Portfolio' name='Portfolio'>

               <div className='ProjectTitle'> <h2>Projects</h2></div> 
                <div className='ProjectsContainer'> 
                {this.createCard()}
                </div>
            </div> 
            )
    }
}

export default Portfolio;