import React from 'react';
import collectionList from '../util/collections';
import NukaCarousel from 'nuka-carousel';
import '../css/Home.css';

const Home = () => {
	const collections = collectionList();
	return (
		<div className="home">
			<NukaCarousel
				animation={'fade'}
				// slidesToShow={1}
				autoplay={true}
				autoplayInterval={3000}
				pauseOnHover={true}
				wrapAround={true}
				renderCenterLeftControls={({ previousSlide }) => (
					<svg
						className="arrows"
						onClick={previousSlide}
						width="140"
						height="34"
						viewBox="-60 0 22 34"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.9232 3.96417L8.38016 16.7565L21.9355 29.5638L17.7662 33.502L0.00807903 16.7606L17.75 0.00201681L21.9232 3.96417Z"
							fill="#F8F8F8"
						/>
					</svg>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<svg
						className="arrows"
						onClick={nextSlide}
						width="160"
						height="34"
						viewBox="70 0 22 34"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 29.5358L13.5492 16.75L0 3.93625L4.17125 0L21.9212 16.75L4.17125 33.5L0 29.5358Z"
							fill="#F8F8F8"
						/>
					</svg>
				)}
			>
				{collections.map((collection) => (
					<div>
						<img
							className="mainImgLayout"
							src={collection.image}
							alt="collection"
						/>
						<div className="text">{collection.collection}</div>
					</div>
				))}
			</NukaCarousel>
		</div>
	);
};

export default Home;
