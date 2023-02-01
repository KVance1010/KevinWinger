import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

const Navbar = () => {
	return (
		<>
			<Link to="/art" className="navLink">
				COLLECTIONS
			</Link>
			<Link to="/artist" className="navLink">
				ARTIST
			</Link>
			<Link to="/media" className="navLink">
				MEDIA
			</Link>
			<Link to="/contact" className="navLink">
				CONTACT
			</Link>
		</>
	);
};

export default Navbar;
