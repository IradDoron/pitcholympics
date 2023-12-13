import CollaboratorCard from '@/components/shared/collaboratorCard';
import collaborators from '@/data/collaborators';
import PageFiller from '@/components/shared/pageFiller';
import { shuffleArray } from '@/utils';

const getColorByIndex = (index: number) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    const color = colors[index % colors.length];
    return color as 'primary' | 'secondary' | 'tertiary';
};

const Page = async () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <PageFiller />
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
