import { Link } from 'react-router-dom'
import image from '../images/logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="searchContainer">
                <button>Search</button>
                <input type="text" placeholder="Search.."/>
            </div>
            <Link to='/'><img className='logo' src={image} alt="SnackerRank logo" /></Link>
            <div className="buttonsContainer">
                <Link to='/random'>
                    <p>Random</p>
                </Link>
                <Link to='/log-in'>
                    <p>Log in</p>
                </Link> 
                <Link to='/sign-up'>   
                    <p>Sign up</p>
                </Link>  
            </div>
        </nav>
    )
}

export default Navbar