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
                    <p> I'm Ramsey, a software engineer based in NY.</p>
                    <p> I love technology, humanity, creativity and solving problems. I am looking for a company to give my skills to. Whatever  additional computer languages would be required for me to acquire, I am ready, willing and able to do just that.  I want to grow as a software engineer. I attended the Fashion Institute of Technology  and got the opportunity to work in the Fashion Industry for a few years on the creative side of the industry,  I then  found  the niche of software engineering where I can take a creative approach utilizing data resources. I have now graduated from my software engineering bootcamp Nebula Academy on January 1st 2021 and I am ready to pull all of my experience and training to the mission of a company.</p>
                    <p> I've listed a few  technologies I've been working with  recently below: </p>
                    <p> JavaScript, React, HTML, CSS,</p>
                    <p>Java, JSX, PostgreSQL, AWS S3</p>
                    <p> AWS EC2, AWS Cloudfront, AWS IAM, Node.js </p>
                </div>
            </div> 
            )
    }
}
export default About;