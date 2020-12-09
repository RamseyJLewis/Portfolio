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
                    <p> I love technology, humanity, creativity and solving problems. I am looking for a company to give my skills to. Whatever computer language I would have to learn to help a company be open to, I want to grow as a software engineer. I went to the Fashion Institute of Technology for a few years and ended up working in the Fashion Industry for a few years as a creative all while still having an interest in fashion. I then graduated from my software engineering bootcamp Nebula Academy on January 1st 2021. </p>
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