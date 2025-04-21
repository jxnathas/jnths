import './NavBar.css';
import logo from '../../assets/logo.png';
import { FaHome, FaUserCheck, FaEnvelope, FaBlackTie, FaUserGraduate } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#home">
                        <FaHome className="navbar-icon" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#about">
                        <FaUserCheck className="navbar-icon" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#services">
                        <FaBlackTie className="navbar-icon" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#resume">
                        <FaUserGraduate className="navbar-icon" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact">
                        <FaEnvelope className="navbar-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;