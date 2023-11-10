import { Collaborator } from '@/types';
import { StaticImageData } from 'next/image';
import IRAD_DORON from 'public/assets/collaborators/irad-doron.png';
import AMIT_HALEVI from 'public/assets/collaborators/amit-halevi.png';

const CollaboratorsImages: { [key: string]: StaticImageData } = {
	'irad-doron': IRAD_DORON,
	'amit-halevi': AMIT_HALEVI,
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
];

export default collaborators;
