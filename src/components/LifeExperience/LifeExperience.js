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
                    <p> 'Male Model working with high end fashion designers and agencies. I worked closely with clients, photographers, fashion coordinators and make-up artists to produce commissioned projects to meet the client's specifications </p>
                </div>
            </div> 
            )
    }
}


 export default LifeExperience