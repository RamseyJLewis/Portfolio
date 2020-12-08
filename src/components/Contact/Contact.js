import React, { Component } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='Contact' name='Contact'>
                <div className='ContactTitle'>  < h2> Get In Touch </h2> </div>
                <div className='ContactCard'>
                    <div className='contactText'>
                        <p> (631-639-4366) </p>
                        <p>  TheRamseyLewis@gmail.com</p>
                    </div>
                    <div className='logo'>                       
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact