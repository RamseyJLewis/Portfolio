import Logo from '../Logo/Logo'
import './NavBar.css'
function NavBar(){
    return(
        <div className ='NavBar'>
            <Logo/> 
            <intro/>
            <div>
            <a className='link' href='http//google.com'>TEST </a>
            <a className='link' href='http//google.com'>TEST </a>
            <a className='link' href='http//google.com'>TEST </a>
            <a className='link' href='http//google.com'>TEST </a>
            <a className='link' href='http//google.com'>TEST </a>
            </div>
        </div>
    )
}
export default NavBar   