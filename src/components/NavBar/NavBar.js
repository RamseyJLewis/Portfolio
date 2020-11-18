import Logo from '../Logo/Logo'
import './NavBar.css'
function NavBar(){
    return(
        <div className ='NavBar'>
            <Logo/> 
            <intro/>
            <div>
            <a className='link' href='/About'>About</a>
            <a className='link' href='/Portfolio'>Portfolio</a>
            <a className='link' href='/Life-Experience'>Life Experience</a>
            <a className='link' href='/Resume'>Resume</a>
            <a className='link' href='/Contact'>Contact</a>
            </div>
        </div>
    )
}
export default NavBar   