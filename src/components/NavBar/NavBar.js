import Logo from '../Logo/Logo';
import './NavBar.css';
import {Link} from 'react-scroll';

function NavBar(){
    return(
        <div className ='NavBar'>
            <Logo/> 
            <div>
                <Link className='link' to='About'smooth = {true}> About </Link>
                <Link className='link' to='Portfolio'smooth = {true}> Portfolio </Link>
                <Link className='link' to='Life-Expirence'smooth = {true}> Life-Expirence </Link>
                <Link className='link' to='Resume'smooth = {true}> Resume </Link>
                <Link className='link' to='Conatct'smooth = {true}> Conatct </Link>
            </div>
        </div>
    )
}
export default NavBar   