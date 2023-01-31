import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../../css/Header.css';

const Header = ({currentPage, handlePageChange}) => {
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};
	return (
		<header>
			<Link to="/" className="logoLink">
				KEVIN WINGER
			</Link>
			<nav className="navContainer">
				<ul className="navList">
					<Navbar
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</ul>
				<div className={`hamburger ${activeState}`} onClick={handleDropDown}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					{dropDown ? (
						<ul className="navbarDropdown">
							<Navbar
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						</ul>
					) : (
						<span></span>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
