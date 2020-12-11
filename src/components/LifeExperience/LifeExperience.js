import React, { Component } from 'react';
import './LifeExperince.css';

class LifeExperience extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }


    render(){
        return(
            <div className = 'LifeExperience' name='LifeExperience'>
                <div className='LifeExperienceTitle'>  < h2> Philanthropy </h2> </div>
                <div className='LifeExperienceCard'>
                    <p> C.O.T.A - COUNCIL OF THOUGHT AND ACTION  </p>
                    <p> Organizer of projects & events such as job fairs. Managed a summer camp for youth while also helping parents & adults find work. The objective of C.O.T.A. is to increase employment rates among formerly incarcerated individuals while reducing re-incarceration rates, improving individual lives and communities.
                    </p>

                </div>
                <div className='LifeExperienceTitle'>  < h2> Business In Fashion </h2> </div>
                <div className='LifeExperienceCard'>
                    <p> My modeling career got its start at the Fashion Institute of Technology in 2019. Since then I've worked on countless photoshoots, been in multiple magazines and walked on runways. One of my main takeaways from modeling is how important the work environment is,  collaboration is a key skill to have in every industry. Often how well or poorly a team works is how well or poorly the final product comes out. My second takeaway from modeling is how important time management is, wasting people's  time is the fastest way to create problems </p>
                </div>
            </div> 
            )
    }
}


 export default LifeExperience