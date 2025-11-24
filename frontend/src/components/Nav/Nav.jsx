import { NavLink } from 'react-router-dom';
import './Nav.css'


function Nav() {
    return (
        <header className="header">
            <NavLink to="/" className="logo"><img className="image" src="ColorChart.png"></img></NavLink>
            <nav className="nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/tracks">Tracks</NavLink>
            </nav>
        </header>
    );
}

export default Nav