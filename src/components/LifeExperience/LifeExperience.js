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
                    <p> Organized projects  and events such as job fairs and ran summer classes for youth. This led me to co-manage a summer camp for youth while also helping parents & adults find work. The objective of C.O.T.A. is to increase employment rates among the  formerly incarcerated while reducing re-incarceration rates, improving individual’s lives and developing opportunities for at-risk youth.

                    </p>

                </div>
                <div className='LifeExperienceTitle'>  < h2> Business In Fashion </h2> </div>
                <div className='LifeExperienceCard'>
                    <p> My modeling career got its start at the Fashion Institute of Technology in 2019. Since then I've worked on countless photoshoots, been in multiple magazines and walked on runways. One of my main takeaways from modeling is the importance of the work environment. Cooperation,   </p>
                </div>
            </div> 
            )
    }
}


 export default LifeExperience