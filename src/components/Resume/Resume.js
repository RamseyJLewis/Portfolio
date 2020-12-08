import React, { Component } from 'react';
import ResumeSC from './ResumeSC.png'  //src/components/Resume
import './Resume.css';

class Resume extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }


    render(){
        return(
            <div className = 'Resume' name='Resume'>
                <div className='ResumeTitle' > <h2>Resume</h2> </div>
                <div className='ResumeCard'>
                <img src={ResumeSC} /> 
                </div>
            </div> 
            )
    }
}



export default Resume