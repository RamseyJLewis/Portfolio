import Logo from '../Logo/Logo';
import { useState } from 'react'
import './NavBar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    const [hover, setHover] = useState(false)
    return(
        <div className ='NavBar'>
            <Logo/> 
            <div className = 'NavBarText'>
                <Link className='navlink' to='About'smooth = {true}> About </Link>
                <Link className='navlink' to='Portfolio'smooth = {true}> Portfolio </Link>
                <Link className='navlink' to='LifeExperience'smooth = {true}> Life-Experience </Link>
                <Link className='navlink' to='Contact'smooth = {true}> Contact </Link>    
                <a onMouseEnter = { () => setHover(true)}  onMouseLeave = { () => setHover(false)} className='ResumeNav' 
                style = {{width: '100px'}} href='../../Assets/ResumeSC.png' download>{
                   
                    
                    hover? <FontAwesomeIcon icon={faFileDownload} /> :'Resume'                 
                }
                </a>                
            </div>
        </div>
    )
}
export default NavBar  