import { Collaborator } from '@/types';
import { StaticImageData } from 'next/image';
import IRAD_DORON from 'public/assets/collaborators/irad-doron.png';

const CollaboratorsImages: { [key: string]: StaticImageData } = {
	'irad-doron': IRAD_DORON,
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
];

export default collaborators;
