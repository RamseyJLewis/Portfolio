import React, { Component } from 'react';

class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '______'

        }
    }
    handleInputChange = (e) =>{
        console.log(e.target.id)
     let value = e.target.value;
        this.setState({futureName:value })
    }

    updateUser = (e) =>{

        this.setState({user: this.state.futureName})
    }

    render(){
        return(
        <header className="App-header">
            <p> Welcome To {this.state.user} React Page</p>
            <input onChange ={this.handleInputChange}/> 
            <button onClick ={this.updateUser}> Chang Name </button>
        </header>
        )
    }
}

export default Intro;
