
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from "./components/Portfolio/Portfolio";
import About from  "./components/About/About";
import LifeExperience from  "./components/LifeExperience/LifeExperience";
import Contact from  "./components/Contact/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <div className="App" name='Home'>
           <NavBar/>
      <div className='Overlay'> </div>
      <div className='Container'>
        <Router>
          <Switch>
            <Route exact path= '/' component={LandingPage} />
            <Route path= '/Portfolio' component={Portfolio}/>
            <Route exact path= '/About' component={About}/>
            <Route exact path= '/LifeExperience' component={LifeExperience}/>        
            <Route exact path= '/Contact' component={Contact}/>
            <Route/>
          </Switch>
        </Router>
        <About/>
       <Portfolio/>
       <LifeExperience/>
       <Contact/>
      </div>
    </div>
  );
}

export default App;
