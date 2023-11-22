import CollaboratorCard from '@/components/shared/collaboratorCard';
import collaborators from '@/data/collaborators';
import PageFiller from '@/components/shared/pageFiller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffle = (array: any[]) => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

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
                {shuffle(collaborators).map((collaborator, index) => {
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
