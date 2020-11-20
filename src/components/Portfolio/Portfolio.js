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
                desc: 'My take on a netflix type webpage',
                tech: [,'HTML', 'CSS','JAVASCRIPT','API'],
                img: card1
            },
            {
                url: 'https://ramseyjlewis.github.io/Space-Force-moon-of-gold/',
                title: 'Space-Force-moon-of-gold',
                desc: 'A space Invades likes game',
                tech: ['HTML', 'CSS','JAVASCRIPT'],
                img: card2
            },
            {
                url: 'https://ramseyjlewis.github.io/Basic-Calculator/',
                title: 'Basic Calculator',
                desc: 'A working Calculator',
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
                    <div key={project.title} className= "projectCard" style={{backgroundImage: `url( ${project.img || this.state.backgroundImage})`}}>
                       <div className='PortfolioText'> <h2>{project.title}</h2></div>
                        <p>{project.desc}</p>
                        <p>{project.tech.map(tech => <p> {tech}</p>)}</p>
                    </div>
                )
            })
        )
    }

    
    render(){
        return(
            <div className = 'Portfolio' name='Portfolio'>
                <h2>Projects</h2>
                <div className='ProjectsContainer'> 
                {this.createCard()}
                </div>
            </div> 
            )
    }
}

export default Portfolio;