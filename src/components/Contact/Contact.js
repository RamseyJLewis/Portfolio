import React, { Component } from 'react';
import './Contact.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div className='Contact' name='Contact'>
            <div className='ContactTitle'>  < h2> Get In Touch </h2> </div>
            <div className='ContactCard'>
                <div className='contactText'>
                    <p> Phone: (631-639-4366) </p>
                    <div className='email'>
                        <a className='logo' href='mailto:TheRamseyLewis@gmail.com' download>{<p>  E-Mail: TheRamseyLewis@gmail.com</p>}</a>
                    </div>
                </div>
                <div className='logo'>
                    <div className='gitubLogo'>
                        <a className='logo' href='https://github.com/RamseyJLewis' target='blank'>{<FontAwesomeIcon icon={faGithub} />}</a>
                    </div>
                    <div className='gitubLogo'>
                        <a className='logo' href='https://www.linkedin.com/in/ramsey-lewis-6483321b2/' target='blank'>{<FontAwesomeIcon icon={faLinkedin} />}</a>
                    </div>
                    <div className='gitubLogo'>
                        <a className='logo' href='https://www.instagram.com/ramseyjlewis/' target='blank'>{<FontAwesomeIcon icon={faInstagram} />}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact