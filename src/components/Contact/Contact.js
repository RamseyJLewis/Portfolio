import React, { Component } from 'react';
import github from '../../Assets/github.png'
import phone from '../../Assets/phone.png'
import linkedin from '../../Assets/linkedin.png'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }


    render(){
        return(
            <div className = 'Contact' name='Contact'>
                <div className='ContactTitle'>  < h2> Get In Touch </h2> </div>
                <div className='ContactCard'>
                    <p> 631-639-4366</p>
                    <p> TheRamseyLewis@gmail.com</p>
                    <div className='logo'>
                        {/* <img src={github} alt="Logo" />
                        <img src={phone} alt="Logo" />
                        <img src={linkedin} alt="Logo" />   */}

                        <FontAwesomeIcon icon= {faGithub} />
                        <FontAwesomeIcon icon= {faLinkedin} />

                    </div>
                </div>
            </div> 
            )
    }
}


 export default Contact