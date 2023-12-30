import AMIT_HALEVI from '@/assets/collaborators/amit-halevi.png';
import ASAF_LEVI from '@/assets/collaborators/asaf-levi.png';
import GAL_EIN_DOR from '@/assets/collaborators/gal-ein-dor.png';
import IRAD_DORON from '@/assets/collaborators/irad-doron.png';
import PELEG_MAZUZ from '@/assets/collaborators/peleg-mazuz.png';
import { CollaboratorCard } from '@shared';
import { Collaborator } from '@types';
import { shuffleArray } from '@utils';
import { StaticImageData } from 'next/image';

const CollaboratorsImages: { [key: string]: StaticImageData } = {
    'irad-doron': IRAD_DORON,
    'amit-halevi': AMIT_HALEVI,
    'gal-ein-dor': GAL_EIN_DOR,
    'peleg-mazuz': PELEG_MAZUZ,
    'asaf-levi': ASAF_LEVI,
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
        city: 'Tel Aviv',
        lookingFor: 'Looking for Full Stack Developer Position',
        image: CollaboratorsImages['peleg-mazuz'],
        linkedin: 'https://www.linkedin.com/in/peleg-mazuz/',
        github: 'https://github.com/pelegsch666',
    },
    {
        id: '5',
        firstName: 'Asaf',
        lastName: 'Levi',
        roles: ['full-stack-developer'],
        city: 'Rosh Haayin',
        lookingFor: 'Looking for Full Stack Developer Position',
        image: CollaboratorsImages['asaf-levi'],
        linkedin: 'https://www.linkedin.com/in/asaf-levi-developer/',
        github: 'https://github.com/Sumsum1000',
    },
];

const getColorByIndex = (index: number) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    const color = colors[index % colors.length];
    return color as 'primary' | 'secondary' | 'tertiary';
};

const Page = async () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex flex-col gap-16'>
                {shuffleArray(collaborators).map((collaborator, index) => {
                    return (
                        <CollaboratorCard
                            key={collaborator.id}
                            collaborator={collaborator}
                            color={getColorByIndex(index)}
                            cardIndex={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
