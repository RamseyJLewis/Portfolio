import React, { Component } from 'react';
import './Portfolio.css';
import card1 from '../../Assets/IMG_9981.jpeg'

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state ={};

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
                tech: ['HTML', 'CSS','JAVASCRIPT']
            },
            {
                url: 'https://ramseyjlewis.github.io/Basic-Calculator/',
                title: 'Basic Calculator',
                desc: 'A working Calculator',
                tech: ['HTML', 'CSS','JAVASCRIPT']
            },
        
        ]

        return allProjects.map(project => {
            console.log(project)
            return(
                <div key={project.title} className= "projectCard" style={{backgroundImage: `url( ${project.img || this.state.backgroundImage})`}}>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <p>{project.tech.map(tech => <p> {tech}</p>)}</p>
                </div>
            )
        })
         
    }

    
    
    render(){
        return(
            <div className = 'Portfolio' name='Portfolio'>
                <h2>Projects</h2>
              {this.createCard()}
            </div> 
            )
    }
}

export default Portfolio;