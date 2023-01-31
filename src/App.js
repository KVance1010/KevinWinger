import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							currentPage = {currentPage}
							handlePageChange = {handlePageChange}
						/>
					}
				/>
				{/* <Route path="/artist" element={<Artist />} /> */}
				{/* <Route path="/art" element={<Art />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
