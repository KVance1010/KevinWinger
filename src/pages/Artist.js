import React from 'react';
import ArtistPic from '../images/kevin/artistKevin.jpg';

const Artist = () => {
	return (
		<section>
			<img src={ArtistPic} />
			<h1>SPIRITED CREATIONS</h1>
			<p>
				Works that bring joy to your space and invite reflection and
				contemplation.
			</p>
			<div>
				<div>
					<h2>INSPIRATION</h2>
					<p>My works draw from nature and landscapes of subconscious.</p>
				</div>
				<div>
					<h2>VISION</h2>
					<p>
						To be a conduit for creative forces and manifest radiant works to
						share.
					</p>
				</div>
				<div>
					<h2>PHILOSOPHY</h2>
					<p>
						Endeavoring to elevate spirits and living spaces through vibrant,
						dimensional and dynamic imagery.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Artist;
