import logo from '../../myLogo.png';
import {Link} from 'react-scroll';
function Logo(){
    return(
        <Link to='Home'smooth = {true}>
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
    )
}
export default Logo   