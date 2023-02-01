import React, { useState } from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Artist from './pages/Artist';
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
							currentPage={currentPage}
							handlePageChange={handlePageChange}
						/>
					}
				/>
				<Route path="/artist" element={<Artist currentPage = {currentPage}
							handlePageChange = {handlePageChange} />} />
				{/* <Route path="/art" element={<Art currentPage = {currentPage}
							handlePageChange = {handlePageChange} />} />
        <Route path="/media" element={<Media currentPage = {currentPage}
							handlePageChange = {handlePageChange} />} />
        <Route path="/contact" element={<Contact currentPage = {currentPage}
							handlePageChange = {handlePageChange} />} /> */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
