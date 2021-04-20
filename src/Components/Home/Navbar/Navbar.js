import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../img/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <a className="navbar-brand" href="#"> <img src={logo} alt=""/>  </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link ms-5 text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-white" href="/booking">Booking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-white" href="#">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-white" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="btn btn-primary ms-5 text-white">
                            <FontAwesomeIcon icon={faUser}/> &nbsp;
                            {
                                loggedInUser.name? loggedInUser.name : 'Login'
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;