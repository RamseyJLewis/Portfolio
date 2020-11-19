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
                <h1> About </h1>
                <div className='AboutCard'>

                </div>
            </div> 
            )
    }
}
export default About;