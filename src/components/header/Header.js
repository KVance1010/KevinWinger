import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
 
const  Header = () => {
	return (
		<header>
			<Link to="/" className="logoLink">
				KEVIN WINGER
			</Link>
			<nav className="navContainer">
                <Navbar />
            </nav>
		</header>
	);
};


export default Header;