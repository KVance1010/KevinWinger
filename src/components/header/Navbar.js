import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<ul>
			<Link to="/art" className="navLink">
				ART
			</Link>
			<Link to="/artist" className="navLink">
				ARTIST
			</Link>
			<Link to="/media" className="navLink">
				MEDIA
			</Link>
			<Link to="/contact" className="navLink">
				Contact
			</Link>
		</ul>
	);
};

export default Navbar