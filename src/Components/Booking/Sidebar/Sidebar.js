import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../img/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className="p-4 bookingPanel">
            
            <img src={logo} alt=""/>
            <ul>
                <h4 className="mt-2"><FontAwesomeIcon icon={faUser}/> {loggedInUser.name}</h4>
                <li className="sidebar-menu">
                    <Link to="/"  className="sidebar-menu-link">Home</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/booking/:id"  className="sidebar-menu-link">Booking</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/bookingList"  className="sidebar-menu-link">Booking List</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/addTestimonial" className="sidebar-menu-link">Add Testimonial</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;