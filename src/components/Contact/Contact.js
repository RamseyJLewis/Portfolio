import React, { Component } from 'react';
import './Contact.css';

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
                </div>
            </div> 
            )
    }
}


 export default Contact