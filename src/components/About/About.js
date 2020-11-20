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
                <div className='AboutText'>  < h2> About </h2> </div>
                <div className='AboutCard'>

                </div>
            </div> 
            )
    }
}
export default About;