import React, { Component } from 'react';
import './Contact.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
        const [hover, setHover] = useState(false)
        return (
            <div className='Contact' name='Contact'>
                <div className='ContactTitle'>  < h2> Get In Touch </h2> </div>
                <div className='ContactCard'>
                    <div className='contactText'>
                        <p> Phone: (631-639-4366) </p>
                        <p>  E-Mail: TheRamseyLewis@gmail.com</p>
                    </div>
                    <div className='logo'>                       
                        <FontAwesomeIcon icon={faGithub} />                
                        <a  className = 'logo' href='https://www.linkedin.com/in/ramsey-lewis-6483321b2/' download>{ <FontAwesomeIcon icon={faLinkedin} />}</a>                                           
                            <a  className = 'logo' href='https://www.instagram.com/ramseyjlewis/' download>{<FontAwesomeIcon icon={faInstagram} />}</a>                         
                    </div>
                </div>
            </div>
        )
    }

export default Contact