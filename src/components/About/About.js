import React, { Component } from 'react';
import './About.css';

class About extends Component{
    constructor(props){
        super(props);
        this.state ={};

    }

    render(){
        return(
            <div className = 'About' name='About'>
                <div className='AboutTitle'>  < h2> About   Me </h2> </div>
                <div className='AboutCard'>
                    <p> 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.' </p>
                    <p> 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.' </p>
                    <p> 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.' </p>
                    <p> 'Gastropub tofu la croix adaptogen salvia literally taiyaki. Flexitarian tbh vaporware man bun listicle franzen unicorn squid deep v normcore locavore godard. Roof party organic messenger bag, knausgaard jean shorts sriracha letterpress fanny pack cred disrupt raclette truffaut.' </p>
                </div>
            </div> 
            )
    }
}
export default About;