import arboreal from '../images/galleries/arboreal.jpg';
import assortment from '../images/galleries/assortment.jpg';
import composite from '../images/galleries/composite.jpg';
import cromascape from '../images/galleries/cromascape.jpg';
import floraform from '../images/galleries/floraform.jpg';
import formative from '../images/galleries/formative.jpg';
import fragment from '../images/galleries/fragment.jpg';
import intersect from '../images/galleries/intersect.jpg';
import nautic from '../images/galleries/nautic.jpg';

const collectionList = () => {
	const collections = [
		{ image: arboreal, collection: 'Arboreal' },
		{ image: composite, collection: 'Composite' },
		{ image: fragment, collection: 'Fragment' },
		{ image: intersect, collection: 'Intersect' },
		{ image: nautic, collection: 'Nautic' },
		{ image: assortment, collection: 'Assortment' },
		{ image: cromascape, collection: 'Cromascape' },
		{ image: floraform, collection: 'Floraform' },
		{ image: formative, collection: 'Formative' },
	];
	return collections;
};

export default collectionList;
