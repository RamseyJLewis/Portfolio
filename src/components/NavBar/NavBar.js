import Logo from '../Logo/Logo';
import './NavBar.css';
import {Link} from 'react-scroll';

function NavBar(){
    return(
        <div className ='NavBar'>
            <Logo/> 
            <div className = 'NavBarText'>
                <Link className='navlink' to='About'smooth = {true}> About </Link>
                <Link className='navlink' to='Portfolio'smooth = {true}> Portfolio </Link>
                <Link className='navlink' to='LifeExperience'smooth = {true}> Life-Experience </Link>
                <Link className='navlink' to='Resume'smooth = {true}> Resume </Link>
                <Link className='navlink' to='Contact'smooth = {true}> Contact </Link>
            </div>
        </div>
    )
}
export default NavBar   