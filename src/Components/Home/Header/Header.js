import React from 'react';
import HeaderHero from '../HeaderHero/HeaderHero';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderHero></HeaderHero>
        </div>
    );
};

export default Header;