import React, { useState } from 'react';
import '../css/Home.css';
import collectionList from '../util/collections';
import Slider from 'infinite-react-carousel';

const Home = () => {
	const collections = collectionList();
	const [mainImg, setMainImg] = useState(collections[0].image);
	const handleMainImg = () => {

	}
	const settings = {
		// autoplay: true,
		duration: 500,
		slidesPerRow: 3,
		centerMode: true,
		swipe: true,
		adaptiveHeight: true,
		// centerPadding: 20,
		wheel: true,
		// slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		// dots: true,
		// afterChange: function (index) { },
	};
	return (
		<div className="home">
			<div className='mainImgContainer'>
			<img className= 'mainImg' src={mainImg} />
			</div>
			<Slider {...settings}>
				{collections.map((collection) => (
					<div>
						<img className="mainImgLayout" src={collection.image} alt='collection' />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Home;
