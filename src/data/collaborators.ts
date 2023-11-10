import { Collaborator } from '@/types';
import { StaticImageData } from 'next/image';
import IRAD_DORON from 'public/assets/collaborators/irad-doron.png';
import AMIT_HALEVI from 'public/assets/collaborators/amit-halevi.png';
import GAL_EIN_DOR from 'public/assets/collaborators/gal-ein-dor.png';
import PELEG_MAZUZ from 'public/assets/collaborators/peleg-mazuz.png';

const CollaboratorsImages: { [key: string]: StaticImageData } = {
	'irad-doron': IRAD_DORON,
	'amit-halevi': AMIT_HALEVI,
	'gal-ein-dor': GAL_EIN_DOR,
	'peleg-mazuz': PELEG_MAZUZ,
};

const collaborators: Collaborator[] = [
	{
		id: '1',
		firstName: 'Irad',
		lastName: 'Doron',
		roles: ['project-manager', 'full-stack-developer'],
		city: 'Tel Aviv',
		lookingFor: 'Looking for Full Stack Developer Position',
		image: CollaboratorsImages['irad-doron'],
		linkedin: 'https://www.linkedin.com/in/irad-doron/',
		github: 'https://github.com/IradDoron',
		portfolio: 'https://iraddoron.com/',
	},
	{
		id: '2',
		firstName: 'Amit',
		lastName: 'Halevi',
		roles: ['full-stack-developer'],
		city: 'Kfar Saba',
		lookingFor: 'Looking for Full Stack Developer Position',
		image: CollaboratorsImages['amit-halevi'],
		linkedin: 'https://www.linkedin.com/in/amit-halevi',
		github: 'https://github.com/HaleviAmit',
		portfolio: 'http://www.haleviamit.com/',
	},
	{
		id: '3',
		firstName: 'Gal',
		lastName: 'Ein Dor',
		roles: ['full-stack-developer'],
		city: 'Mevaseret Zion',
		lookingFor: 'Looking for Full Stack Developer Position',
		image: CollaboratorsImages['gal-ein-dor'],
		linkedin: 'https://www.linkedin.com/in/gal-eindor/',
		github: 'https://github.com/galeindor',
	},
	{
		id: '4',
		firstName: 'Peleg',
		lastName: 'Mazuz',
		roles: ['full-stack-developer'],
		city: 'Ramle',
		lookingFor: 'Looking for Full Stack Developer Position',
		image: CollaboratorsImages['peleg-mazuz'],
		linkedin: 'https://www.linkedin.com/in/gal-eindor/',
		github: 'https://github.com/pelegsch666',
	},
];

export default collaborators;
